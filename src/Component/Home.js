import React from 'react'
import { Header } from './Header'
import NavHeader from './NavHeader'
import ImageSlider from './ImageSlider'
import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';

export const Home = () => {
    return (
        <div>
            <Header />
            <NavHeader />
            <ImageSlider />
            <div className='w-100 mt-5 h-auto md:px-16'> 
                <h3>About</h3>
                <p className='text-lg'> Indian Institute of Information Technology Surat is an Institute of National Importance established under the Act of Parliament 2017, by erstwhile Ministry of Human Resource Development (MHRD), Government of India, on not-for-profit and in Public-Private-Partnership basis. A memorandum of understanding was signed in 2016 between the President of India, the Governor of the State of Gujarat and Industry partners namely; Gujarat Narmada valley Fertilizer and Chemicals (GNFC), Gujarat Informatics Limited (GIL) and Gujarat Gas Limited. The Institute started in 2017 with SVNIT as mentoring Institute.

The Government of Gujarat has allotted 28.71 Acre of land for developing the infrastructure. The Institute is in its own new academic facility at Kholvad in Kamrej Taluka of Surat District. The campus is close to National Highway No.48, linking Mumbai to New Delhi.

IIIT Surat is offering B. Tech. degree in Electronics & Communication Engineering and Computer Science Engineering. Admission to the course is only for candidates qualified in JEE (Main). The PhD programme started in the year 2022-23. Admission to the Institute is managed by Central Seat Allocation Board (CSAB), Govt. of India and Joint Seat Allocation Authority (JoSAA).</p>
            </div>
            <div className='w-100 h-auto md:px-16 md:flex md:flex-row md:space-x-3'>
                <div className='w-50 mt-6 mb-8'>
                <Card className="text-center">
                    <Card.Header>Latest Notification</Card.Header>
                    <Card.Body>
                        <Card.Text>
                          <a>   With supporting text below as a natural lead-in to additional content.</a>
                        </Card.Text>
                        <Card.Text>
                          <a>   With supporting text below as a natural lead-in to additional content.</a>
                        </Card.Text>
                        <Card.Text>
                          <a>   With supporting text below as a natural lead-in to additional content.</a>
                        </Card.Text>
                        <Card.Text>
                          <a>   With supporting text below as a natural lead-in to additional content.</a>
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                </div>
                <div className='w-50 mt-6'>
                <Card className="text-center">
                    <Card.Header>Announcements</Card.Header>
                    <Card.Body>
                        <Card.Text>
                          <a>   With supporting text below as a natural lead-in to additional content.</a>
                        </Card.Text>
                        <Card.Text>
                          <a>   With supporting text below as a natural lead-in to additional content.</a>
                        </Card.Text>
                        <Card.Text>
                          <a>   With supporting text below as a natural lead-in to additional content.</a>
                        </Card.Text>
                        <Card.Text>
                          <a>   With supporting text below as a natural lead-in to additional content.</a>
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
