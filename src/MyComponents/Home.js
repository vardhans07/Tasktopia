import React from 'react';


export const Home = () => {
    return (
        <div className='container-home'>
        <div className='text-center'>
         <div className='wel'>
            <h2>Welcome to Tasktopia</h2>
         </div>
            
            <div className='features'>
                <h3>Features</h3>
                <div className='feature-list'>
                    <div className='feature-item'>
                        <h4>Task Management</h4>
                        <p>Organize your tasks with ease.</p>
                    </div>
                    <div className='feature-item'>
                        <h4>Collaboration</h4>
                        <p>Work with your team seamlessly.</p>
                    </div>
                    <div className='feature-item'>
                        <h4>Deadline</h4>
                        <p>Never miss a deadline.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
