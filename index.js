import React from 'react';
import { Tabs,Popover } from 'antd';
import RightPenetration from './RightPenetration';
import RightStructure from './RightStructure';
import styles from './index.less';


class StockRightMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    //   treeData:{}
    };
  }

  handleOperationLog = (value) =>{
    // console.log(value)
  }


  render() {
    const { treeData } = this.props

    return (

      <div style={{position:'relative'}}>
        <Popover
              placement="topRight"
              content={<div style={{fontSize:'12px',color:'#3D3D3D'}}>
                <div>股权穿透图：企业的股权划分和投资关系图。</div>
                <div>股权结构图：结构化展现企业股东及持股、对外投资的企业及金额数据情况。</div>
              </div>}
              trigger="hover">
            <img alt="" src={require('../../../../../../assets/info-circle-grey.png')} className={styles.icon}/>
        </Popover>
        <Tabs className={`m-tabs-qyzs-detail ${styles.tabs}`}  defaultActiveKey="rightPenetration" onChange={this.handleOperationLog}>
          <Tabs.TabPane tab={<p style={{ fontSize: '16px' }}>股权穿透图</p>} key="rightPenetration" forceRender>
            <RightPenetration treeData={treeData}></RightPenetration>
          </Tabs.TabPane>
          <Tabs.TabPane tab={<p style={{ fontSize: '16px' }}>股权结构图</p>} key="rightStructure" forceRender>
            <RightStructure treeData={treeData}></RightStructure>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}
export default StockRightMap;
