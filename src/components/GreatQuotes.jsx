import React from 'react';

// Import Styled Components
import {
  Quote, SubTitle, Head, Balloon,
} from './Header.atoms';

export default () => (
  <div>
    <Quote>
      <div className="messages">
        <div className="message -left">
          <Head className="nes-bcrikko" />
          &nbsp;
          <Balloon className="nes-balloon from-left">
            <p>Projects, that are not good for us.</p>
          </Balloon>
        </div>
      </div>
    </Quote>
    <br />
    <SubTitle>List of dead Technosoft projects</SubTitle>
  </div>
);
