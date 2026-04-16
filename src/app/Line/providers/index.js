
import TimelineProvider from '@/app/context/TimelineProvider';
import React from 'react';

const  Provider = ({children}) => {
    return (
    <TimelineProvider>
        {children}
    </TimelineProvider>
    );
};

export default  Provider;