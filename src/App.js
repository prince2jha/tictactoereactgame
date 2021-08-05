import logo from './logo.svg';

import Icon from './components/icon';

//import treact-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import reactstrap and bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Container,CardBody, Card,Col,Row } from 'reactstrap';
import './App.css';
import { useState } from 'react';

const tiktacArray = new Array(9).fill("");
// let index;
function App() {
  let [isCross,setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState('');
  
  // let [draw, setIsDraw] = useState(false);
  const playAgain  = () =>{
    setIsCross(true);
    setWinMessage('');
    tiktacArray.fill('');
  }
  const findWinner=()=>{
    // let winnerArray = [
    //   [0,1,2],
    //   [3,4,5],
    //   [6,7,8],
    //   [0,3,6],
    //   [1,4,7],
    //   [2,5,8],
    //   [0,4,8],
    //   [2,4,6]
    // ];
    if(!tiktacArray[0]||!tiktacArray[1]||!tiktacArray[2]||!tiktacArray[3]||!tiktacArray[4]||!tiktacArray[5]||!tiktacArray[6]||!tiktacArray[7]||!tiktacArray[8]){
      if(tiktacArray[0]===tiktacArray[1] && tiktacArray[0]===tiktacArray[2] && tiktacArray[0]){
        setWinMessage(tiktacArray[0]+" has won!");
      }
      else if(tiktacArray[3]===tiktacArray[4] && tiktacArray[3]===tiktacArray[5] && tiktacArray[3]){
        setWinMessage(tiktacArray[3]+" has won!");
      }
      else if(tiktacArray[6]===tiktacArray[7] && tiktacArray[6]===tiktacArray[8] && tiktacArray[6]){
        setWinMessage(tiktacArray[6]+" has won!");
      }
      else if(tiktacArray[0]===tiktacArray[3] && tiktacArray[0]===tiktacArray[6] && tiktacArray[0]){
        setWinMessage(tiktacArray[0]+" has won!");
      }
      else if(tiktacArray[1]===tiktacArray[4] && tiktacArray[1]===tiktacArray[7] && tiktacArray[1]){
        setWinMessage(tiktacArray[1]+" has won!");
      }
      else if(tiktacArray[2]===tiktacArray[5] && tiktacArray[2]===tiktacArray[8] && tiktacArray[2]){
        setWinMessage(tiktacArray[2]+" has won!");
      }
      else if(tiktacArray[0]===tiktacArray[4] && tiktacArray[0]===tiktacArray[8] && tiktacArray[0]){
        setWinMessage(tiktacArray[0]+" has won!");
      }
      else if(tiktacArray[2]===tiktacArray[4] && tiktacArray[2]===tiktacArray[6] && tiktacArray[2]){
        setWinMessage(tiktacArray[2]+" has won!");
      }
    }else{
      if(tiktacArray[0]===tiktacArray[1] && tiktacArray[0]===tiktacArray[2] && tiktacArray[0]){
        setWinMessage(tiktacArray[0]+" has won!");
      }
      else if(tiktacArray[3]===tiktacArray[4] && tiktacArray[3]===tiktacArray[5] && tiktacArray[3]){
        setWinMessage(tiktacArray[3]+" has won!");
      }
      else if(tiktacArray[6]===tiktacArray[7] && tiktacArray[6]===tiktacArray[8] && tiktacArray[6]){
        setWinMessage(tiktacArray[6]+" has won!");
      }
      else if(tiktacArray[0]===tiktacArray[3] && tiktacArray[0]===tiktacArray[6] && tiktacArray[0]){
        setWinMessage(tiktacArray[0]+" has won!");
      }
      else if(tiktacArray[1]===tiktacArray[4] && tiktacArray[1]===tiktacArray[7] && tiktacArray[1]){
        setWinMessage(tiktacArray[1]+" has won!");
      }
      else if(tiktacArray[2]===tiktacArray[5] && tiktacArray[2]===tiktacArray[8] && tiktacArray[2]){
        setWinMessage(tiktacArray[2]+" has won!");
      }
      else if(tiktacArray[0]===tiktacArray[4] && tiktacArray[0]===tiktacArray[8] && tiktacArray[0]){
        setWinMessage(tiktacArray[0]+" has won!");
      }
      else if(tiktacArray[2]===tiktacArray[4] && tiktacArray[2]===tiktacArray[6] && tiktacArray[2]){
        setWinMessage(tiktacArray[2]+" has won!");
      }
      else{
        setWinMessage(" Draw!");
      }
      
    }
  }
  const changeItem=(index)=>{
    if(winMessage){
      return toast('Khatam! Taa ta byee bye! ',{type:"warning"});
    }
    if(tiktacArray[index]===''){
      tiktacArray[index] = isCross?"cross":"circle";
      setIsCross(!isCross);
    }
    else{
      return toast('Already filled!',{type:"error"});
    }
    findWinner();
    // isDraw();
  }
  return (
    <Container className="p-5">
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      ></ToastContainer>
      <Row>
        <Col md={6} className="offset-md-3">
          {
            //to display the winner message
            winMessage?(
              <div>
                <h1  className="text-center">{winMessage}</h1>
                <button onClick={playAgain}>Play Again</button>
              </div>
              
            ):(
              <h1>
                {isCross? "Cross's Turn": "Circle's Turn"}
              </h1>
            )
          }
          <div className="grid">
            {tiktacArray.map((value,index)=>(
              <Card onClick={()=>changeItem(index)}>
                <CardBody className="box">
                  <Icon choice={tiktacArray[index]}/>
                </CardBody>
              </Card>
            ))
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
