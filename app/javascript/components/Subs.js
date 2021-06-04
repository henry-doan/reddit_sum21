import React from 'react';

const url = "http://localhost:3000"

const Subs = ({ subs }) => {
  return (
    <>
      <h1>All Subs</h1>
      {/* <a href="http://localhost:3000/subs/new">Add Sub</a>
      <a href={` ${url} + /subs/new`}>Add Sub</a> */}
      <a href="/subs/new">Add Sub</a>
      <div className="row">
        {
          subs.map( (sub) => (
            <div className="col">
              <div className="card" style={{width: '18rem'}}>
                {/* <img src={sub.image} className="card-img-top" alt="..." /> */}
                <img src={sub.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{sub.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href={'/subs/' + sub.id} className="btn btn-primary">Show sub</a>
                  {' '}
                  <a href={'/subs/' + sub.id + '/edit'} className="btn btn-primary">Edit Sub</a>
                  {' '}
                  <a href={'/subs/' + sub.id} data-method="delete" className="btn btn-primary">Delete Sub</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Subs;