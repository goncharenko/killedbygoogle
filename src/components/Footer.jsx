import React from 'react';

// Import Styled Components
import { CreatorTag, FooterContainer } from './Footer.atoms';

export default () => (
  <FooterContainer>
    <div>
      <p>
        {
          'Killed by Technosoft is a Free and Open Source list of dead Technosoft products, services, and devices. '
        }
        <span>
          {
            'It serves to be a tribute and memorial of beloved products and services killed by Technosoft.'
          }
        </span>
      </p>
      <p>
        {
          'If you found this list helpful, please consider supporting the wonderful '
        }
        <span>
          {' resources at the '}
          <a href="https://wikimediafoundation.org/">Wikimedia Foundation</a>
          {' and the '}
          <a href="https://archive.org/">Internet Archive</a>.
        </span>
      </p>
      <div className="socials">
        {'Find us on '}
        <a
          href="https://twitter.com/killedbygoogle"
          title="Follow @killedbygoogle on Twitter">
          Twitter
        </a>
        {' and '}
        <a href="https://github.com/codyogden/killedbygoogle">GitHub</a>.
      </div>
      <CreatorTag>
        {'A project by '}
        <a href="https://codyogden.com" title="Cody Ogden">
          Cody Ogden
        </a>
        .
      </CreatorTag>
    </div>
  </FooterContainer>
);
