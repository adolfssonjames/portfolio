import React from 'react'
import '../css/ommig.css';
const ommig = () => {

      // Function will execute on click of button
      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('cv-james-adolfsson.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'cv-james-adolfsson.pdf';
                alink.click();
            })
        })
    }
  return (
    <div>
         <section>
            <h1 className='titel'>James Adolfsson</h1>
        </section>
        <aside className='ommig-container'>
        
                <h1>OM MIG</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                </p>
                <h4>Ladda ner mitt CV i pdf-format här nedan</h4>
                <button onClick={onButtonClick}>
                    Ladda hem CV
                </button>
            
        </aside>
        
    </div>
  )
}

export default ommig