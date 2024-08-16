import React from 'react'
import Card from './Card';
import useWorkoutsContext from '../hooks/useWorkoutsContext';

const WorkoutsContainer = () => {
   const{workouts}= useWorkoutsContext();
  return (
    <>
     <div className=" flex flex-item  order-2 tab:order-1 card-container w-full tab:w-1/2">
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