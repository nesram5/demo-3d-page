import React from 'react';
import { Button} from 'pragmate-ui/components'

export /*bundle*/ function View(): JSX.Element {
	return (
	  <main style={{ textAlign: 'center', padding: '2rem' }}>
		<section></section>
		<h1>Welcome to Demo Page</h1>
		<h2 style={{ marginTop: '1rem' }}>
		  This is a demostration of verge 3D working with Beyond JS.
		</h2>
		<Button variant="primary" style={{ marginTop: '2rem' }}>
		  Get Started
		</Button>
		<section className='container'>
			<iframe className='responsive-iframe'
			allowFullScreen
			src="https://v3d.net/14lu"
			title="Verge3D Viewer"
			style={{ border: 'none' }}
		></iframe>
	  </section>
	  </main>
	);
  };
  //src="https://v3d.net/14lq"