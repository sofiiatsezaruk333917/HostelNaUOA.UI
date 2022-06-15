import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import {Form, Col } from "react-bootstrap";


const AppHostel = () =>{
    const [Data, setData] = useState([]);//Get запит
    // перегляду даних 
    const [RowData,SetRowData] = useState([])
    const [ViewShow,SetViewData] = useState(false)
    const handleViewShow = () => {SetViewData(true)}
    const handleViewClose = () => {SetViewData(false)}
    // перегляду даних кінець

    // редагування даних початок
    const [ViewEdit,SetEditData] = useState(false)
    const handleEditShow = () => {SetEditData(true)}
    const handleEditClose = () => {SetEditData(false)}
    // редагування даних кінець

    
    // Додавання даних початок
    const [ViewPost,SetPostData] = useState(false)
    const handlePostShow = () => {SetPostData(true)}
    const handlePostClose = () => {SetPostData(false)}
    // Додавання даних кінець


    // локальна зміна яка має тримати дані
    const [description,setdescription] = useState("")
    const [countBed,setcountBed] = useState("")
    const [freeBedCount,setfreeBedCount] = useState("")



    // витянем Ід для видалення і для оновлення
    const[id,setId] = useState("");

    const[Delete,setDelete] = useState(false);



    const GetHostel = () =>{
    const url = `http://localhost:44379/hostel` // прочитати цю силку
    axios.get(url)
    .then(response=>{
        console.log(response);
        const result = response.data;
        const {data} = result;
       
            setData(result)
            console.log(data)
    })
    .catch(err =>{
        console.log(err)
    })

    }

    const handleSubmit = () =>{
        const url = `http://localhost:44379/hostel` //прочитати цю силку
        const Credentials = {description, countBed, freeBedCount }
        axios.post(url,Credentials)
        .then(response=>{
            console.log(response);
            const result = response.data;
            const {status, message, data} = result;
        
               
                window.location.reload()
        })
    }
    const handleEdit = () =>{
        const url =`http://localhost:44379/hostel/${id}` //прочитати цю силку
        const Credentials = {id, description, countBed,  freeBedCount }
        console.log('Edit');
        console.log(Credentials, id);
        axios.put(url,Credentials)
            .then(response=>{
                const result = response.data;
                const {status, message} = result;
                console.log(message, status)
                    window.location.reload()
            })
    }

    //функція delite
    const handleDelete = () =>{
        const url =`http://localhost:44379/hostel/${id}` //прочитати цю силку
        
        axios.delete(url)
            .then(response=>{
                const result = response.data;
                const {status, message} = result;
                console.log(message, status)
                    window.location.reload()
            })
    }




    useEffect(()=>{
        GetHostel();
    },[])


  const [validated, setValidated] = useState(false);

  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    console.log(Data);
    return(
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='outline-info' onClick={()=>{handlePostShow()}}>
                        <i className='fa fa-plu'></i>
                            Додати новий гуртожиток
                    </Button>
                    
                
            </div>
             <div className='row'>
                <div className='table-responsive'>
                    <table className='table  table-hover table-bordered'>
                        <thead>
                            <tr className='table-primary'>
                                <th>Id</th>
                                <th>Description</th>
                                <th>CountBed</th>
                                <th>FreeBedCount</th>
                                <th>Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data?.hostels?.map((item) =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.description}</td>
                                    <td>{item.countBed}</td>
                                    <td>{item.freeBedCount}</td>
                                    <td style={{minWidth:140}}>

                                    
                                    <NavLink to="roomList"
                                    style={{textDecoration:"none"}}>
                                        <Button size='sm' variant='outline-primary'>
                                            Додати кімнату 
                                        </Button> {' '}
                                        </NavLink> 
                                    <Button size='sm' variant='outline-warning' onClick={() =>{handleEditShow(SetRowData(item),setId(item.id))}}>Редагувати </Button> {' '}
                                    <Button size='sm' variant='outline-danger'  onClick={() =>{handleViewShow(SetRowData(item),setId(item.id), setDelete(true))}}>Видалити </Button> {' '}
                                     
                                    </td>                            
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
            </div>
            {/* Перегляд всіх даних про гж */}
            <div className='model-box-view'>
                <Modal
                show={ViewShow}
                onHide={handleViewClose}
                backdrop="static"
                keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Дані про гуртожиток</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.description} readOnly />
                            </div>
                            
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.countBed} readOnly />
                            </div>
                            
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.freeBedCount} readOnly />
                            </div>
                            {
                                Delete &&(
                                    <Button type='submit' className='btn btn-danger mt-4'onClick={handleDelete}>Видалити гуртожиток</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleViewClose}>Закрити</Button>
                    </Modal.Footer>

                </Modal>
            </div>

            {/*Додавання гж в database */}
            <div className='model-box-view'>
            <Modal
                show={ViewPost}
                onHide={handlePostClose}
                backdrop="static"
                keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Додати гуртожиток</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <Form noValidate validated={validated} onSubmit={handleSubmit1}>
                                
                                    <Form.Group as={Col}  controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="text"
                                            className='form-control  mt-3'
                                            onChange={(e)=> setdescription(e.target.value)}
                                            placeholder="Назва гуртожитку"
                                        />
                                        
                                    </Form.Group>
                                    
                                   
                                    

                                    <Form.Group as={Col}  mt-3 controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="number"
                                        className='form-control  mt-3'
                                        onChange={(e)=> setcountBed(e.target.value)}
                                        placeholder="Кількість місць"
                                    />
                                    
                                    </Form.Group>

                                    
                                    
                                    <Form.Group as={Col}  mt-3 controlId="validationCustom02">
                                    <Form.Control
                                        required
                                        type="number"
                                        className='form-control  mt-3'
                                        onChange={(e)=> setfreeBedCount(e.target.value)}
                                        placeholder="Кількість вільних місць "
                                    />
                                    
                                    </Form.Group>

                                <Button type="submit" className='btn btn-success mt-4' onClick={()=>{handleSubmit()}} >Додати гуртожиток</Button>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handlePostClose}>Закрити</Button>
                    </Modal.Footer>

                </Modal>
            </div>
            {/* редагування всіх даних по гуртожитку */}
            <div className='model-box-view'>
            <Modal
                show={ViewEdit}
                onHide={handleEditClose}
                backdrop="static"
                keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Редагувати</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit1}>
                                <Form.Group as={Col}  mt-3 controlId="validationCustom01">
                                    <Form.Label>Назва гуртожитка</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        className='form-control  '
                                        onChange={(e)=> setdescription(e.target.value)}
                                        defaultValue={RowData.description}
                                        placeholder="Назва гуртожитку"
                                    />
                                </Form.Group>
                                
                               
                                

                                <Form.Group as={Col}  mt-3 controlId="validationCustom02">
                                <Form.Label>Кількість місць</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    className='form-control '
                                    onChange={(e)=> setcountBed(e.target.value)}
                                    defaultValue={RowData.countBed}
                                    placeholder="Кількість місць"
                                />
                                </Form.Group>

                              
                                                               
                                <Form.Group as={Col}   controlId="validationCustom02">
                                <Form.Label>Кількість вільних місць</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    className='form-control '
                                    onChange={(e)=> setfreeBedCount(e.target.value)}
                                    defaultValue={RowData.freeBedCount}
                                    placeholder="Кількість вільних місць "
                                />
                                </Form.Group>

                            <Button type="submit" className='btn btn-warning mt-4' onClick={()=>{handleEdit()}} >Редагувати</Button>
                        </Form>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleEditClose}>Закрити</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        </div>
    );
}

export default AppHostel;