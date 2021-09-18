import { Menu } from 'antd';
import classNames from 'classnames';
import { History, Location } from 'umi';
import { useState, useEffect } from 'react';
import { Route } from '@ant-design/pro-layout/lib/typings';

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

export default function BlogLayout({
    route: { routes },
    history,
    location,
    children,
}: IBlogLayout) {
    const [selectedKeys, setSelectedKeys] = useState('');

    useEffect(() => {
        setSelectedKeys(location.pathname);
    }, [location.pathname]);

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <div className={classNames(['typeArea', styles.warp])}>
                    <h1
                        className={classNames([styles.logo, 'scaleAnm'])}
                        onClick={jump.bind(null, PAGE_ENUM.HOME)}
                    >
                        Felex
                    </h1>
                    <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKeys]}>
                        {routes &&
                            routes.map(
                                (item: Route) =>
                                    !item.hidden && (
                                        <Menu.Item
                                            key={item.path}
                                            onClick={jump.bind(null, item.path)}
                                        >
                                            {item.name}
                                        </Menu.Item>
                                    ),
                            )}
                    </Menu>
                </div>
            </header>
            <main className={styles.main}>{children}</main>
        </main>
    );
}
