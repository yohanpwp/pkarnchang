import React from 'react';
import Header from '../../../components/Store/Header';
import Footer from '../../../components/Store/Footer';

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <h1 className="mt-5" style={{fontSize:120}}>404</h1>
                    <h2 className="mb-4" style={{fontSize:100}}>Not Found</h2>
                    <p className="title mb-4">ขออภุัยไม่พบหน้าที่คุณค้นหา ดูเหมือนว่าหน้าเว็บที่คุณพยายามเข้าถึงไม่มีอยู่อีกต่อไปหรืออาจจะย้ายไปหน้าอื่่นแล้ว</p>
                    </div>
                </div>
            <Footer />
        </div>
    );
};
export default NotFound;