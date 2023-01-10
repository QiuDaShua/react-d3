import React,{ useEffect, useState} from 'react';
import { Col, Row, Tabs } from 'antd';
import styles from './index.less';
import RightStructureUp from './RightStructureUp';
import RightStructureDown from './RightStructureDown';


export default function RightStructure(props){

    // 点击按钮切换不同数据
    const handleChangeTree = (flag) =>{
      // console.log(flag)
    }


    const { treeData } = props

    return (
      <div>
        <Tabs className={`m-tabs-qyzs-detail ${styles.structureTab}`} defaultActiveKey="up" onChange={handleChangeTree}>
          <Tabs.TabPane tab={<p style={{ fontSize: '16px' }}>股东持股</p>} key="up" forceRender>
            <RightStructureUp treeData={treeData}></RightStructureUp>
          </Tabs.TabPane>
          <Tabs.TabPane tab={<p style={{ fontSize: '16px' }}>对外投资</p>} key="down" forceRender>
            <RightStructureDown treeData={treeData}></RightStructureDown>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
