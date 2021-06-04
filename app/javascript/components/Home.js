import React from 'react';
// import fruits from '../../assets/images/fruits.png';
export const styles = {
  mainHeader: {
    background: 'blue',
    color: 'red',
    fontSize: '45px'
  }, 
  subHeader: {
    fontSize: '12px',
    background: 'red',
    color: 'white'
  }
}

const Home = () => (
  <>
    <h1 style={{background: "green", fontSize: '24px'}}>Home Page</h1>
    <h1 style={styles.mainHeader}>Home Page</h1>
    <h1 style={styles.subHeader}>Home Page</h1>
    <h1 className="title">this is a title</h1>
    <h1 className="subTitle">this is a title</h1>
    <img src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="fruits basket" />
    {/* <img src={fruits} alt="fruits basket" /> */}
  </>
)

export default Home;