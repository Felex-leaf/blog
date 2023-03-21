import type { Route } from '@ant-design/pro-layout/lib/typings';
import { Menu } from 'antd';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { history, Outlet, useAppData } from 'umi';

import Hamburger from '@/components/Hamburger';
import ThemeBtn from '@/components/ThemeBtn';
import { PAGE_ENUM } from '@/configs';
import { jump } from '@/utils';
import store from '@/store';

import styles from './index.less';

const style = {
  display: 'none',
};

export default observer(() => {
  const [selectedKeys, setSelectedKeys] = useState('');
  const [isActive, setIsActive] = useState(false);
  const { routes } = useAppData();
  const { GlobalStore } = store;

  const handleSelectKeys = () => {
    const { location } = history;
    setSelectedKeys(location.pathname);
  };

  useEffect(() => {
    handleSelectKeys();
    history.listen(handleSelectKeys);
    if (!location.href.includes('heart')) GlobalStore.setShowMeun(true);
  }, []);

  const handleClick = (_isActive: boolean) => {
    setIsActive(_isActive);
    if (_isActive) document.body.style.overflow = 'hidden';
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
      <header className={styles.dontRHeader} style={!GlobalStore?.show ? style : {}}>
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
              items={Object.keys(routes).filter((key) => (routes[key] as Route).show)?.map(
                (key) => {
                  const item = routes[key] as Route;
                  return {
                    label: item.name,
                    key: item.path,
                    onClick: () => handleJump(item.path),
                  };
                },
              )}
            />
            <ThemeBtn className={styles.dontRthemeBtn} />
          </div>
          <Hamburger
            className={styles.dontRhamburger}
            onClick={handleClick}
            isActive={isActive}
          />
        </div>
      </header>
      <div className={styles.dontRDiv} style={!GlobalStore?.show ? style : {}} />
      <main className={styles.main}><Outlet /></main>
    </main>
  );
});
