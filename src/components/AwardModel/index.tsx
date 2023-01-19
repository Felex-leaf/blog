import Ranking from '@/components/Ranking';
import React from 'react';
import Lottie from 'react-lottie';
import styles from '../index.less';
import StarLottie from './StarLottie.json';

interface IAwardModelProps {
  showStar: boolean;
  integralNum: number;
  onStarAnimation: boolean;
  hideModal?: () => void;
  id?: string;
  small?: boolean;
}

export default class AwardModel extends React.PureComponent<IAwardModelProps> {
  state = {
    userIntegralNum: 0,
    showStar: false,
    boxX: 0,
    boxY: 0,
    add: false,
  };
  audio: HTMLAudioElement[] = [];
  t: (NodeJS.Timer | number)[] = [];
  async componentDidMount() {
    this.setState({
      userIntegralNum: 10,
    });
    const num = this.props.integralNum === 10 ? 1 : this.props.integralNum;
    const arr = Array(num).fill(0);
    this.audio = arr.map(() => new Audio());
    if (this.props.integralNum === 10) {
      this.audio[0].src =
        'https://static-website-alioss.ilearnta.com/taskCard/644cb66f99880d05b3540c624bdb0d0b.mp3';
    } else {
      this.audio = this.audio.map((item) => {
        item.src =
          'https://static-website-alioss.ilearnta.com/taskCard/6db8a0289130109c74efc5d227a3b715.mp3';
        return item;
      });
    }
    this.setState({
      showStar: true,
    });
    if (this.props.integralNum < 10) {
      this.getOneStarPosition();
    }
    this.t.push(
      setTimeout(() => {
        this.onMoveStar();
      }, 1000),
    );
  }
  componentWillUnmount() {
    if (this.audio && this.audio.length > 0) {
      this.audio.forEach((item) => {
        item.pause();
        item.src = '';
      });
      this.t.forEach((item) => clearTimeout(item as NodeJS.Timer));
    }
  }
  onMoveStar = () => {
    const { integralNum } = this.props;
    const targetDoms = document.getElementById('ranking_star') as any;
    const sourceDoms = document.getElementsByClassName('box_star___6Wbry') as any;
    const sourceWrapDoms = document.getElementsByClassName('star_Item___3stlc') as any;
    sourceDoms.forEach((element: any, index: number) => {
      if (
        targetDoms.getBoundingClientRect() &&
        sourceDoms[index].getBoundingClientRect() &&
        sourceWrapDoms[index].getBoundingClientRect()
      ) {
        const targetRect = targetDoms.getBoundingClientRect();
        const sourceRect = sourceDoms[index].getBoundingClientRect();
        const sourceWrapRect = sourceWrapDoms[index].getBoundingClientRect();
        const offset = integralNum < 10 ? 12 : 36;
        const rectX = targetRect.left - sourceRect.left - offset;
        const rectY = targetRect.top - sourceWrapRect.top - offset;
        if (rectY || rectX) {
          const scale = integralNum < 10 ? 0.6 : 0.3;
          const transformStrX = 'translateX(' + rectX + 'px) scale(' + scale + ', ' + scale + ')';
          const transformStrY = 'translateY(' + rectY + 'px)';
          ((i: number) => {
            this.t.push(
              setTimeout(() => {
                sourceDoms[i].style.transform = transformStrX;
                sourceWrapDoms[i].style.transform = transformStrY;
                if (integralNum === 10 && i === 0) {
                  this.audio[0].load();
                  this.audio[0].play();
                } else if (integralNum !== 10) {
                  if (i === 0) {
                    this.t.push(
                      setTimeout(() => {
                        this.audio[i].load();
                        this.audio[i].play();
                      }, 0),
                    );
                  } else {
                    this.t.push(
                      setTimeout(() => {
                        this.audio[i].load();
                        this.audio[i].play();
                      }, i * 130),
                    );
                  }
                }
                this.t.push(
                  setTimeout(() => {
                    sourceDoms[i].style.display = 'none';
                  }, 1000),
                );
              }, i * 150),
            );
          })(index);
        }
      }
    });
  };
  componentDidUpdate(prevProps: any) {
    if (
      !this.state.add &&
      this.props.onStarAnimation &&
      this.props.onStarAnimation &&
      this.props.integralNum
    ) {
      this.setState({
        add: true,
      });
      const addIntegral = (i: number) => {
        this.t.push(
          setTimeout(() => {
            if (i === this.props.integralNum + 1) {
              this.setState({
                showStar: false,
              });
              this.setState({
                add: false,
              });
            } else if (i < this.props.integralNum) {
              this.setState({
                userIntegralNum: this.state.userIntegralNum + 1,
              });
            }
          }, 150 * i),
        );
      };
      setTimeout(() => {
        for (let i = 0; i <= this.props.integralNum + 1; i++) {
          addIntegral(i);
        }
      }, 2000);
    }
  }

  getOneStarPosition = () => {
    const { id, small } = this.props;
    const box = document.getElementById(id || '');
    if (box) {
      const boxRect = box.getBoundingClientRect();
      const x = boxRect.left + (small ? 15 : 25);
      const y = boxRect.top + (small ? 20 : 25);
      this.setState({
        boxX: x,
        boxY: y,
      });
    }
  };

  handlerHideModal = () => {
    const { hideModal } = this.props;
    if (hideModal) hideModal();
  };

  render() {
    const { integralNum, onStarAnimation } = this.props;
    const { userIntegralNum, showStar, boxX, boxY } = this.state;
    const style = integralNum < 10 ? { left: boxX - 15, top: boxY } : {};
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: StarLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    let paddingTop = '0px';
    let left = '35px';
    if (integralNum === 10) {
      paddingTop = '100px';
      left = '50%';
    }
    return (
      <>
        {showStar && (
          <div className={styles.star_modal} onClick={this.handlerHideModal}>
            <Ranking
              integralNum={userIntegralNum}
              onStarAnimation={onStarAnimation || false}
              style={{ cursor: 'default' }}
              id="ranking_star"
            />
            <div className={styles.star_wrap} style={style || {}}>
              {new Array(integralNum).fill(1).map((item, index) => (
                <span
                  key={index}
                  className={styles.star_Item}
                  style={
                    integralNum < 10
                      ? {
                          width: '50px',
                          height: '50px',
                          right: 'calc(50% - 10px)',
                          top: 'calc(50% - 45px)',
                        }
                      : {}
                  }
                >
                  <span
                    className={styles.box_star}
                    style={integralNum < 10 ? { width: '50px', height: '50px' } : {}}
                  />
                </span>
              ))}
              {integralNum === 10 ? (
                <Lottie
                  options={defaultOptions}
                  height="400px"
                  width="400px"
                  style={{
                    transform: 'translate(-38%, -38%)',
                    pointerEvents: 'none',
                  }}
                />
              ) : (
                <span
                  className={styles.big_box_star}
                  style={
                    integralNum < 10
                      ? {
                          left: '35px',
                          top: '30px',
                          width: '50px',
                          height: '50px',
                        }
                      : {}
                  }
                />
              )}
              <span className={styles.box_number} style={{ paddingTop, left }}>
                +{integralNum}
              </span>
              {/* { integralNum > 1 && integralNum !== 10  && <span className={styles.star_shine} ></span> } */}
            </div>
          </div>
        )}
      </>
    );
  }
}
