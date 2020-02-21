import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{textAlign:'center', fontFamily:'Roboto',fontSize:120, color:'white',marginTop:'60px',marginLeft:'170px'}}>
                    Welcome To
                </h1>
                <p style={{textAlign:'center', fontFamily:'Roboto',fontSize:90, color:'white', marginTop:'-100px',marginLeft:'200px'}}>Warung Makan Bahari</p>
            </div>
        )
    }
}

export default Home;