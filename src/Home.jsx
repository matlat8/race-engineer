import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Row, Col, Layout } from "antd";
import NavBar from './NavBar'

const { Header, Content } = Layout;

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

const Home = () => {

  return (
    <>
    <NavBar nav_key='home'/>
    <Layout>
        <Layout>
            <Content>
            <div className='full-width'>
                <Row>
                  <Col span={12}>Column 1</Col>
                  <Col span={12}>Column 2</Col>
                </Row>
                <Row>
                  <Col span={8}>Column 1</Col>
                  <Col span={8}>Column 2</Col>
                  <Col span={8}>Column 3</Col>
                </Row>
            </div>
            </Content>
        </Layout>
    </Layout>
    </>

  )
}

export default Home