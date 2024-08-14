import React from 'react'
import Card from './Card';
import useWorkoutsContext from '../hooks/useWorkoutsContext';

const WorkoutsContainer = () => {
   const{workouts}= useWorkoutsContext();
  return (
    <>
     <div className=" flex flex-item card-container">
            {workouts.length > 0 ? (
              workouts.map((workout, index) => {
                return (
                  <Card
                    key={workout._id}
                    workout={workout}
                  ></Card>
                );
              })
            ) : (
              <p>No workout found</p>
            )}
          </div>
    </>
  )
}

export default WorkoutsContainer