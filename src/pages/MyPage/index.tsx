import React from "react";
import {PageContainer} from "@ant-design/pro-layout";
import {
  BankTwoTone,
  ShoppingTwoTone,
} from '@ant-design/icons';
import { Link } from 'umi'

export default (): React.ReactNode => (
  <PageContainer >
    <Link to="/a"><BankTwoTone style={{fontSize: '100px'}}/></Link>
    <Link to="/b"><ShoppingTwoTone style={{fontSize: '100px'}}/></Link>
  </PageContainer>
)
