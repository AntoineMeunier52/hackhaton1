import React from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap';
import Famille from './FamilySection';
import styles from './FamilySection';


function FamilySection  ({name,urlx}){
    return(
        <div style = {{height:"100%", width:"50%"}}>
            <div style={{height:"100%",width:"50%",backgroundImage:"url("+urlx+")"}}></div>
            <div>{name}'Family</div>
        </div>
    )}
 export default FamilySection ;













































      { /* <div>
        <Accordion>
                <Card>
                    <div><Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <img className={styles.imgFamilySection} src="https://i.pinimg.com/originals/c5/0c/b8/c50cb8fd976b00db9a3a2a7a8b799255.jpg" alt="" />
                    
                        <div className={styles.articleLayout}>
                            <h2 className={styles.textStyle}>Lucchese Family</h2>
                            <p className={styles.textStyle}> Angel’s Envy, each year around this time, gets ready to send to market its premium Cask Strength Kentucky Straight Bourbon Whiskey Finished In Port Barrels. Normally the most exclusive offering the distillery offers, it has been overshadowed somewhat by the Angel’s Envy Kentucky Straight Bourbon Whiskey Finished In Japanese Mizunara Oak Casks bottling that was announced a little earlier this year. Nonetheless, the Cask Strength holds its own as a top tier whiskey in Angel’s Envy’s line up.</p>
                        </div>
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
        <div>
        <Accordion>
                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <img className={styles.imgFamilySection} src="https://media2.nekropole.info/2015/01/Joseph-Bonanno.jpg" alt="" />
                    
                        <div className={styles.articleLayout}>
                            <h2 className={styles.textStyle}>Bonanno Familiy</h2>
                            <p className={styles.textStyle}>The Arran Malt finished in Sauternes casks. These casks that previously held Bordeaux sweet wine give a honeyed sweetness to the isle of Arran’s only single malt distillery.</p>
                        </div>
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
        </div> */}