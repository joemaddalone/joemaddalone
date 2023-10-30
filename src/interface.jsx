import React from 'react';
import Resume from './_includes/components/resume';

export const frontMatter = { layout: 'landing.html' };

const Index = () => (
    <div style={{width: '99vw', display: 'flex', justifyContent: 'center'}}>
        <Resume />
    </div>
);

export default Index;
