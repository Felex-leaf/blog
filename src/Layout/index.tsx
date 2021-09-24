import { Menu } from 'antd';
import classNames from 'classnames';
import { History, Location } from 'umi';
import { useState, useEffect } from 'react';
import { Route } from '@ant-design/pro-layout/lib/typings';

import Hamburger from '@/components/Hamburger';
import ThemeBtn from '@/components/ThemeBtn';
import { PAGE_ENUM } from '@/configs';
import { jump } from '@/utils';

import styles from './index.less';

interface IBlogLayout {
    children: JSX.Element;
    routes: Route[];
    route: Route;
    history: History;
    location: Location;
}

export default function BlogLayout({ route: { routes }, location, children }: IBlogLayout) {
    const [selectedKeys, setSelectedKeys] = useState('');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setSelectedKeys(location.pathname);
    }, [location.pathname]);

    const handleClick = (isActive: boolean) => {
        setIsActive(isActive);
        if (isActive) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    };
    const handleJump = (path: string | undefined) => {
        if (isActive) {
            setIsActive(false);
            document.body.style.overflow = 'auto';
        }
        jump(path);
    };
    return (
        <main className={styles.container}>
            <header className={styles.dontRHeader}>
                <div className={classNames(['typeArea', styles.warp])}>
                    <h1
                        className={classNames([styles.logo, 'scaleAnm'])}
                        style={{ fontSize: 32 }}
                        onClick={jump.bind(null, PAGE_ENUM.HOME)}
                    >
                        Felex
                    </h1>
                    <div
                        className={classNames([
                            {
                                [styles.dontRMenuModal]: isActive,
                            },
                            styles.menuWrap,
                        ])}
                    >
                        <Menu
                            theme="dark"
                            mode={isActive ? 'inline' : 'horizontal'}
                            selectedKeys={[selectedKeys]}
                        >
                            {routes &&
                                routes.map(
                                    (item: Route) =>
                                        !item.hidden && (
                                            <Menu.Item
                                                key={item.path}
                                                onClick={handleJump.bind(null, item.path)}
                                            >
                                                {item.name}
                                            </Menu.Item>
                                        ),
                                )}
                        </Menu>
                        <ThemeBtn className={styles.dontRthemeBtn} />
                    </div>
                    <Hamburger
                        className={styles.dontRhamburger}
                        onClick={handleClick}
                        isActive={isActive}
                    />
                </div>
            </header>
            <div className={styles.dontRDiv}></div>
            <main className={styles.main}>{children}</main>
        </main>
    );
}
