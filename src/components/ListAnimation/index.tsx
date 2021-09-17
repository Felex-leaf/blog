import React, { Component, createRef } from 'react';
import TweenOne from 'rc-tween-one';
import Lottie from 'react-lottie';
import lottieJSON from './lottie.json';
import { IAnimObject } from 'rc-tween-one/typings/AnimObject';

interface IListAnimationProps {
    children: JSX.Element[];
    current: number;
    to: number;
    viewNum: number;
    rankingHeight: number;
}

interface IListAnimationState {
    animation: IAnimObject[];
    lottieAnimationStart: boolean;
    end: boolean;
    current: number;
}

interface IElement extends Element {
    innerText?: string;
}

export default class ListAnimation extends Component<IListAnimationProps> {
    state: IListAnimationState = {
        animation: [],
        lottieAnimationStart: false,
        end: false,
        current: 0,
    };

    containerRef = createRef<HTMLDivElement>();

    componentDidMount() {
        const { children, current, to, viewNum, rankingHeight } = this.props;
        const scrollTop =
            current - Math.ceil(viewNum / 2) > 0 ? (current - Math.ceil(viewNum / 2)) * 60 : 0;
        const scrollBox = document.getElementById('scrollBox');
        if (!scrollBox) return;
        scrollBox.scrollTop = scrollTop;
        const rankingList = [
            {
                orgId: null,
                userId: 56036,
                userName: 'sxs',
                avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
                integralNum: 97,
                ranking: 1,
            },
        ];
        setTimeout(() => {
            const totalTime = 1000;
            setTimeout(() => {
                const target = document.getElementById('target');
                if (!target) return;
                const targetScroll = target.offsetTop;
                const offset = scrollBox.scrollTop - targetScroll;
                const step = () => {
                    scrollBox.scrollTop -= (offset / totalTime) * 15;
                    if (scrollBox.scrollTop - targetScroll <= 3) {
                        scrollBox.scrollTop = targetScroll;
                    } else {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }, totalTime / (current - to));
            const animation: Array<IAnimObject> = children.map((item, i) => {
                let animationItem: IAnimObject = {};
                if (i < current && i >= to) {
                    const delay = (totalTime / (current - to)) * (current - i);
                    animationItem = {
                        top: 60,
                        marginBottom: i === current - 1 ? '60px' : '',
                        duration: totalTime / (current - to),
                        delay,
                        onStart: ({ target }) => {
                            const numDom: IElement =
                                target.getElementsByClassName('rankingNumber')[0];
                            if (!numDom) return;
                            numDom.innerText = String(i + 2);
                            if (i < 3) {
                                const awardDom = target.getElementsByClassName(
                                    `rankingAward${i + 1}`,
                                )[0];
                                if (awardDom) {
                                    awardDom.className = `rankingAward${i + 2}`;
                                }
                            }
                        },
                    };
                }
                if (i === current) {
                    const offset = rankingHeight - (viewNum - 1) * 60;
                    // 滚动条在底部定位处理
                    const length = rankingList.length;
                    const halfViewNum = Math.ceil(viewNum / 2);
                    const isBottom = scrollBox.scrollTop + scrollBox.clientHeight >= length * 60;
                    let top = halfViewNum * 60;
                    if (to < halfViewNum) {
                        top = to * 60;
                    }
                    if (isBottom) {
                        if (viewNum > length) {
                            top = (viewNum - (viewNum - to)) * 60;
                        } else if (viewNum - (length - to) - 1 >= halfViewNum) {
                            top = (viewNum - (length - to) - 1) * 60 + offset;
                        }
                    }
                    animationItem = {
                        top,
                        boxShadow: '0 10px 10px rgba(0,0,0,0.15)',
                        position: 'absolute',
                        duration: totalTime,
                        delay: totalTime / (current - to),
                        onStart: ({ target }) => {
                            const delay = totalTime / (current - to);
                            const numDom: IElement =
                                target.getElementsByClassName('rankingNumber')[0];
                            if (!numDom) return;
                            const timer = setInterval(() => {
                                numDom.innerText = String(Number(numDom.innerText) - 1);
                            }, delay);
                            setTimeout(() => {
                                clearInterval(timer);
                                numDom.innerText = String(to + 1);
                                if (to < 3) {
                                    const awardDom = target.getElementsByClassName(
                                        `rankingAward${current + 1}`,
                                    )[0];
                                    if (awardDom) {
                                        awardDom.className = `rankingAward${to + 1}`;
                                    }
                                }
                            }, totalTime);
                        },
                        onComplete: () => {
                            const finial = () => {
                                const finialAnimation = animation.map((it, index) =>
                                    index === current
                                        ? { top: to * 60, width: '100%', duration: 0, zIndex: '0' }
                                        : it,
                                );
                                this.setState({
                                    animation: finialAnimation,
                                    end: true,
                                });
                            };
                            const newAnimation = animation.map((it, index) =>
                                index === current
                                    ? {
                                          scale: 1,
                                          boxShadow: '0 0 0',
                                          border: '0px',
                                          borderBottom: '1px solid #ddd',
                                          onComplete: finial,
                                      }
                                    : it,
                            );
                            this.setState(
                                {
                                    animation: newAnimation,
                                    lottieAnimationStart: true,
                                },
                                () => {
                                    setTimeout(() => {
                                        this.setState({
                                            lottieAnimationStart: false,
                                        });
                                    }, 2000);
                                },
                            );
                        },
                    };
                }
                return animationItem;
            });
            this.setState({
                animation,
            });
        }, 1000);
    }

    componentDidUpdate(preProp: IListAnimationProps, preState: IListAnimationState) {
        const { current, animation } = this.state;
        if (
            preState.animation[current] &&
            animation[current] &&
            preState.animation[current].scale !== animation[current].scale
        ) {
            return true;
        }
    }

    toArrayChildren = (children: JSX.Element[]) => {
        const ret: JSX.Element[] = [];
        React.Children.forEach(children, (c) => {
            ret.push(c);
        });
        return ret;
    };

    getChildren = (item: JSX.Element, i: number) => {
        const { current } = this.props;
        const { animation } = this.state;
        return React.createElement(TweenOne, {
            ...item.props,
            style: { ...item.props.style, marginBottom: i === current - 1 ? '60px' : '' },
            key: item.key,
            animation: animation[i],
            component: item.type,
        });
    };

    render() {
        const { children } = this.props;
        const { end, lottieAnimationStart } = this.state;
        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: lottieJSON,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };
        const width = document.body.clientWidth;
        const height = document.body.clientHeight;
        const left = (width - 768) / 2;
        return (
            <>
                <div
                    style={end ? { position: 'relative', overflowX: 'hidden' } : {}}
                    ref={this.containerRef}
                >
                    {this.toArrayChildren(children).map(this.getChildren)}
                </div>
                {(!end || lottieAnimationStart) && (
                    <div
                        style={{
                            position: 'fixed',
                            top: -38,
                            left: -left,
                            height: `${height}px`,
                            width: `${width}px`,
                        }}
                    >
                        {lottieAnimationStart && (
                            <Lottie
                                options={defaultOptions}
                                height="100%"
                                width="100%"
                                style={{ pointerEvents: 'none' }}
                            />
                        )}
                    </div>
                )}
            </>
        );
    }
}
