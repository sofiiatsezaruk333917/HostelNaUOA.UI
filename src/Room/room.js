import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {NavLink, Route, Routes } from 'react-router-dom';
import { FloatingLabel, Form } from "react-bootstrap";
import {Col } from "react-bootstrap";


const AppRoom = () =>{
   
  const [Data, setData] = useState([]);// Get запиту 
  // перегляду даних початок
  const [RowData,SetRowData] = useState([])
  const [ViewShow,SetViewData] = useState(false)
  const handleViewShow = () => {SetViewData(true)}
  const handleViewClose = () => {SetViewData(false)}
  //перегляду даних кінець

  //редагування даних початок
  const [ViewEdit,SetEditData] = useState(false)
  const handleEditShow = () => {SetEditData(true)}
  const handleEditClose = () => {SetEditData(false)}
  //редагування даних кінець

 

  //для Додавання даних початок
  const [ViewPost,SetPostData] = useState(false)
  const handlePostShow = () => {SetPostData(true)}
  const handlePostClose = () => {SetPostData(false)}
  //для Додавання даних кінець

  
  // тут буде локальна зміна яка буде тримати дані
  const [numberRoom,setnumberRoom] = useState("")
  const [bedCount,setbedCount] = useState("")
  const [studentCount,setstudentCount] = useState("")
  const [freeBedCount,setfreeBedCount] = useState("")
  const [roomSex,setroomSex] = useState("")
  const [dormitoryId,setdormitoryId] = useState("")



  // витянем Ід для видалення і для оновлення
  const[id,setId] = useState("");

  const[Delete,setDelete] = useState(false);



  const GetRoomData = () =>{
  const url = 'http://localhost:52745/room' //пробити цю силку
  axios.get(url)
  .then(response=>{
      console.log(response);
      const result = response.data;
      const { data} = result;
     
          setData(result)
          console.log(data)
  })
  .catch(err =>{
      console.log(err)
  })

  }

  const handleSubmit = () =>{
      const url = 'http://localhost:52745/room' //пробити цю силку
      const Credentials = {numberRoom, bedCount, studentCount, freeBedCount, roomSex, dormitoryId }
      axios.post(url,Credentials)
      .then(response=>{
          console.log(response);
          const result = response.data;
          const {status, message, data} = result;
      
             
              window.location.reload()
      })
  }

  const handleEdit = () =>{
      const url =`http://localhost:52745/room/${id}` //пробити цю силку
      const Credentials = {numberRoom, bedCount, studentCount, freeBedCount, roomSex, dormitoryId}
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

  //функція для деліту
  const handleDelete = () =>{
      const url =`http://localhost:52745/room/${id}` //пробити цю силку
      
      axios.delete(url)
          .then(response=>{
              const result = response.data;
              const {status, message} = result;
              console.log(message, status)
                  window.location.reload()
          })
  }




  useEffect(()=>{
      GetRoomData();
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
    return (
      <div>
      <div className='row'>
          <div className='mt-5 mb-4'>
              <Button variant='outline-info' onClick={()=>{handlePostShow()}}>
                  <i className='fa fa-plu'></i>
                      Додати нову кімнату
              </Button>
              
          
      </div>
       <div className='row'>
          <div className='table-responsive'>
              <table className='table  table-hover table-bordered'>
                  <thead>
                      <tr className='table-primary'>
                          <th>Id</th>
                          <th>numberRoom</th>
                          <th>bedCount</th>
                          <th>studentCount</th>
                          <th>freeBedCount</th>
                          <th>roomSex</th>
                          <th>dormitoryId</th>
                          <th>Buttons</th>
                      </tr>
                  </thead>
                  <tbody>
                      {Data?.rooms?.map((item) =>
                          <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.numberRoom}</td>
                              <td>{item.bedCount}</td>
                              <td>{item.studentCount}</td>
                              <td>{item.freeBedCount}</td>
                              <td>{item.roomSex}</td>
                              <td>{item.dormitoryId}</td>
                              <td style={{minWidth:140}}>
                              <NavLink to="student"
                              style={{textDecoration:"none"}}>
                                  <Button size='sm' variant='outline-primary'>
                                      Поселити студента
                                  </Button>{' '}
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
      {/* цей блок для перегляду всіх даних про гж */}
      <div className='model-box-view'>
          <Modal
          show={ViewShow}
          onHide={handleViewClose}
          backdrop="static"
          keyboard={false}
          >
              <Modal.Header closeButton>
                  <Modal.Title>Дані про кімнату</Modal.Title>

              </Modal.Header>
              <Modal.Body>
                  <div>
                  
                      <div className='form-group'>
                          <input type="text" className='form-control' value={RowData.numberRoom} readOnly />
                      </div>
                      <div className='form-group mt-3'>
                          <input type="text" className='form-control' value={RowData.bedCount} readOnly />
                      </div>
                      <div className='form-group mt-3'>
                          <input type="text" className='form-control' value={RowData.studentCount} readOnly />
                      </div>
                      <div className='form-group'>
                          <input type="text" className='form-control' value={RowData.freeBedCount} readOnly />
                      </div>
                      <div className='form-group'>
                          <input type="text" className='form-control' value={RowData.roomSex} readOnly />
                      </div>
                      <div className='form-group'>
                          <input type="text" className='form-control' value={RowData.dormitoryId} readOnly />
                      </div>
                      
                      {
                          Delete &&(
                              <Button type='submit' className='btn btn-danger mt-4'onClick={handleDelete}>Видалити кімнтау</Button>
                          )
                      }
                  </div>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant='secondary' onClick={handleViewClose}>Закрити</Button>
              </Modal.Footer>

          </Modal>
      </div>
      {/*цей блок для додавання гж в database */}
      <div className='model-box-view'>
      <Modal
          show={ViewPost}
          onHide={handlePostClose}
          backdrop="static"
          keyboard={false}
          >
              <Modal.Header closeButton>
                  <Modal.Title>Додати кімнату</Modal.Title>

              </Modal.Header>
              <Modal.Body>
                  <div>
                        <Form noValidate validated={validated} onSubmit={handleSubmit1}>
                            <Form.Group as={Col}  controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="number"
                                    className='form-control  mt-3'
                                    onChange={(e)=> setnumberRoom(e.target.value)}
                                    placeholder="Введіть номер кімнати"
                                />
                            </Form.Group>
                            
                            <Form.Group as={Col}  mt-3 controlId="validationCustom02">
                            <Form.Control
                                required
                                type="number"
                                className='form-control  mt-3'
                                onChange={(e)=> setbedCount(e.target.value)}
                                placeholder="Введіть кількість місць у кімнаті"
                            />
                            </Form.Group>

                            <Form.Group as={Col}  controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="number"
                                    className='form-control  mt-3'
                                    onChange={(e)=> setstudentCount(e.target.value)}
                                    placeholder="Введіть кількість проживаючих"
                                />
                            </Form.Group>
                            
                            <Form.Group as={Col}  mt-3 controlId="validationCustom02">
                            <Form.Control
                                required
                                type="number"
                                className='form-control  mt-3'
                                onChange={(e)=> setfreeBedCount(e.target.value)}
                                placeholder="Введіть кількість вільних місць"
                            />
                            </Form.Group>

                            

                            <FloatingLabel as={Col}  mt-3 controlId="validationCustom02"
                                className=' mt-3'
                                required
                                type="text"
                                onChange={(e)=> setroomSex(e.target.value)} 
                                label="Оберіть стать"
                                >
                                <Form.Select aria-label="Floating label select example">
                                    <option></option>
                                    <option value="Чоловіча">Чоловіча</option>
                                    <option value="Жіноча">Жіноча</option>
                                </Form.Select>
                            </FloatingLabel>                          


                            <FloatingLabel as={Col}  mt-3 controlId="validationCustom02"
                                className=' mt-3'
                                required
                                type="text"
                                onChange={(e)=> setdormitoryId(e.target.value)}
                                label="Оберіть гуртожиток"
                                >
                                <Form.Select aria-label="Floating label select example">
                                    <option></option>
                                    <option value="1">Академічний дім</option>
                                    <option value="2">Гуртожиток № 9</option>
                                    <option value="3">Гуртожиток № 2</option>
                                    <option value="4">Гуртожиток № 7</option>
                                    <option value="5">Гуртожиток № 8</option>
                                    <option value="6">Гуртожиток № 10</option>
                                    <option value="8">Гуртожиток № 3</option>
                                    <option value="9">Гуртожиток № 5</option>
                                    <option value="10">Гуртожиток № 6</option>
                                    <option value="11">Гуртожиток № 4</option>
                                </Form.Select>
                            </FloatingLabel>

                            
                            
                           
                            <Button type="submit" className='btn btn-success mt-4' onClick={()=>{handleSubmit()}} >Додати кімнату</Button>
                        </Form>
                  </div>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant='secondary' onClick={handlePostClose}>Закрити</Button>
              </Modal.Footer>

          </Modal>
      </div>
      {/* цей блок для редагування всіх даних про гж */}
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
                            <Form.Group as={Col}  controlId="validationCustom01">
                            <Form.Label>Номер кімнати</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    className='form-control'
                                    onChange={(e)=> setnumberRoom(e.target.value)}
                                    defaultValue={RowData.numberRoom}
                                    placeholder="Введіть номер кімнати"
                                                                       
                                />
                            </Form.Group>
                            
                            <Form.Group as={Col}  mt-3 controlId="validationCustom02">
                            <Form.Label>Кількість місць</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                className='form-control'
                                onChange={(e)=> setbedCount(e.target.value)}
                                defaultValue={RowData.bedCount}
                                placeholder="Введіть кількість місць у кімнаті"
                            />
                            </Form.Group>

                            <Form.Group as={Col}  controlId="validationCustom01">
                            <Form.Label>Кількість проживаючих</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    className='form-control'
                                    onChange={(e)=> setstudentCount(e.target.value)}
                                    defaultValue={RowData.studentCount}
                                    placeholder="Введіть кількість проживаючих"
                                />
                            </Form.Group>
                            
                            <Form.Group as={Col}  mt-3 controlId="validationCustom02">
                            <Form.Label>Кількість вільних місць</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                className='form-control'
                                onChange={(e)=> setfreeBedCount(e.target.value)}
                                defaultValue={RowData.freeBedCount}
                                placeholder="Введіть кількість вільних місць"
                            />
                            </Form.Group>

                        

                            <Form.Label>Оберіть стать</Form.Label>
                            <FloatingLabel as={Col} controlId="validationCustom02"
                                required
                                type="text"
                                onChange={(e)=> setroomSex(e.target.value)} 
                                defaultValue={RowData.roomSex}
                                
                                >
                                <Form.Select aria-label="Floating label select example">
                                    <option>{RowData.roomSex}</option>
                                    <option value="Чоловіча">Чоловіча</option>
                                    <option value="Жіноча">Жіноча</option>
                                </Form.Select>
                            </FloatingLabel>                          


                            <FloatingLabel as={Col}  mt-3 controlId="validationCustom02"
                                className=' mt-3'
                                required
                                type="text"
                                onChange={(e)=> setdormitoryId(e.target.value)}
                                defaultValue={RowData.dormitoryId}
                                label="Оберіть гуртожиток"
                                >
                                <Form.Select aria-label="Floating label select example">
                                    <option>{RowData.dormitoryId}</option>
                                    <option value="1">Академічний дім</option>
                                    <option value="2">Гуртожиток № 9</option>
                                    <option value="3">Гуртожиток № 2</option>
                                    <option value="4">Гуртожиток № 7</option>
                                    <option value="5">Гуртожиток № 8</option>
                                    <option value="6">Гуртожиток № 10</option>
                                    <option value="8">Гуртожиток № 3</option>
                                    <option value="9">Гуртожиток № 5</option>
                                    <option value="10">Гуртожиток № 6</option>
                                    <option value="11">Гуртожиток № 4</option>
                                </Form.Select>
                            </FloatingLabel>

                           

                            
                            <Button type="submit" className='btn btn-warning mt-4'onClick={()=>{handleEdit()}}>Редагувати</Button>
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

export default AppRoom;