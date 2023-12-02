const canvas = document.getElementById("canvas");

function createPixel(color, isBlinking, isRed, isBlue, isYellow) {
    const pixel = document.createElement("div");
    pixel.className = 'pixel';
    
    // Apply the specified color to the pixel
    pixel.style.backgroundColor = color;

    if (isBlinking) {
        pixel.classList.add('blinking');
    }

    if(isRed){
        pixel.classList.add('red');
    }

    if(isBlue){
        pixel.classList.add('blue');
    }

    if(isYellow){
        pixel.classList.add('yellow');
    }

    return pixel;
}



// 51 by 92

// 19 by 27

// 38 by 54



function generateGrid(rows, cols, pixelSize) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let pixelColor = '#7CBAEF'; // Default color (white)
            let isBlinking = false;
            let isRed = false;
            let isBlue = false;
            let isYellow = false;

            // first layer
            if (i >= 50 && j >= 43 && j <= 44) {
                pixelColor = '#542717'; 
            } 

            if (i >= 50 && j >= 45 && j <= 48) {
                pixelColor = '#6E382C'; 
            } 

            //second layer
            if (i >= 48 && i <= 49 && j >= 41 && j <= 44) {
                pixelColor = '#3C7035'; 
            } 

            if (i >= 48 && i <= 49 && j >= 45 && j <= 46) {
                pixelColor = '#542717'; 
            } 

            if (i >= 48 && i <= 49 && j >= 47 && j <= 48) {
                pixelColor = '#6E382C'; 
            } 

            if (i >= 48 && i <= 49 && j >= 53 && j <= 54) {
                pixelColor = '#407138'; 
            } 

            // third layer
            if (i >= 46 && i <= 47 && j >= 31 && j <= 34) {
                pixelColor = '#3B6743'; 
            } 

            if (i >= 46 && i <= 47 && j >= 39 && j <= 40) {
                pixelColor = '#3B6743'; 
            } 

            if (i >= 46 && i <= 47 && j >= 41 && j <= 44) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 46 && i <= 47 && j >= 45 && j <= 48) {
                pixelColor = '#542717'; 
            } 

            if (i >= 46 && i <= 47 && j >= 49 && j <= 52) {
                pixelColor = '#407138'; 
            } 

            if (i >= 46 && i <= 47 && j >= 53 && j <= 54) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 46 && i <= 47 && j >= 55 && j <= 56) {
                pixelColor = '#407138'; 
            } 

            //fourth layer
            if (i >= 44 && i <= 45 && j >= 31 && j <= 34) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 44 && i <= 45 && j >= 35 && j <= 38) {
                pixelColor = '#3B7348'; 
            } 

            if (i >= 44 && i <= 45 && j >= 39 && j <= 40) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 44 && i <= 45 && j >= 41 && j <= 44) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 44 && i <= 45 && j >= 45 && j <= 48) {
                pixelColor = '#3D7239'; 
            } 

            if (i >= 44 && i <= 45 && j >= 49 && j <= 52) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 44 && i <= 45 && j >= 53 && j <= 54) {
                pixelColor = '#4D8341'; 
            } 

            if (i >= 44 && i <= 45 && j >= 55 && j <= 56) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 44 && i <= 45 && j >= 57 && j <= 60) {
                pixelColor = '#3B6743'; 
            } 

            // fifth layer
            if (i >= 42 && i <= 43 && j >= 31 && j <= 34) {
                pixelColor = '#4D9445'; 
            } 

            if (i >= 42 && i <= 43 && j >= 35 && j <= 38) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 42 && i <= 43 && j >= 39 && j <= 44) {
                pixelColor = '#52943D';  // main green 
            } 

            if (i >= 42 && i <= 43 && j >= 45 && j <= 48) {
                pixelColor = '#EEF1E9';  // main  
            } 

            if (i >= 42 && i <= 43 && j >= 49 && j <= 52) {
                pixelColor = '#CC322E';  // main red
                isBlinking = true;
                isRed = true;
            } 

            if (i >= 42 && i <= 43 && j >= 53 && j <= 56) {
                pixelColor = '#52943D';  // main green 
            } 

            if (i >= 42 && i <= 43 && j >= 57 && j <= 60) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 42 && i <= 43 && j >= 61 && j <= 62) {
                pixelColor = '#3B6743'; // main dark green
            } 

            // sixth layer
            if (i >= 40 && i <= 41 && j >= 29 && j <= 32) {
                pixelColor = '#3B6743'; 
            } 

            if (i >= 40 && i <= 41 && j >= 33 && j <= 40) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 40 && i <= 41 && j >= 41 && j <= 42) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 40 && i <= 41 && j >= 43 && j <= 48) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 40 && i <= 41 && j >= 49 && j <= 52) {
                pixelColor = '#CC322E';  // main red
                isBlinking = true;
                isRed = true;
            } 

            if (i >= 40 && i <= 41 && j >= 53 && j <= 54) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 40 && i <= 41 && j >= 55 && j <= 60) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 40 && i <= 41 && j >= 61 && j <= 62) {
                pixelColor = '#EEF1E9'; 
            } 

            // seventh row
            if (i >= 38 && i <= 39 && j >= 27 && j <= 28) {
                pixelColor = '#3B6743'; 
            } 

            if (i >= 38 && i <= 39 && j >= 29 && j <= 32) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 38 && i <= 39 && j >= 33 && j <= 36) {
                pixelColor = '#F1E25A'; // yellow
                isBlinking = true;
                isYellow = true;
            } 

            if (i >= 38 && i <= 39 && j >= 37 && j <= 38) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 38 && i <= 39 && j >= 39 && j <= 46) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 38 && i <= 39 && j >= 47 && j <= 50) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 38 && i <= 39 && j >= 51 && j <= 54) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 38 && i <= 39 && j >= 55 && j <= 58) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 38 && i <= 39 && j >= 59 && j <= 62) {
                pixelColor = '#52943D'; // green
            } 

            if (i >= 38 && i <= 39 && j >= 63 && j <= 64) {
                pixelColor = '#3B6743'; // dark greem
            } 

            // eight layer
            if (i >= 36 && i <= 37 && j >= 27 && j <= 28) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 36 && i <= 37 && j >= 29 && j <= 32) {
                pixelColor = '#4D9540'; 
            } 

            if (i >= 36 && i <= 37 && j >= 33 && j <= 36) {
                pixelColor = '#F1E25A'; 
                isBlinking = true;
                isYellow = true;
            } 

            if (i >= 36 && i <= 37 && j >= 37 && j <= 64) {
                pixelColor = '#52943D'; 
            }

            // ninth layer
            if (i >= 34 && i <= 35 && j >= 33 && j <= 44) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 34 && i <= 35 && j >= 45 && j <= 48) {
                pixelColor = '#3F7038'; 
            } 

            if (i >= 34 && i <= 35 && j >= 49 && j <= 52) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 34 && i <= 35 && j >= 53 && j <= 56) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 34 && i <= 35 && j >= 57 && j <= 58) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 34 && i <= 35 && j >= 59 && j <= 60) {
                pixelColor = '#F1E25A'; 
                isBlinking = true;
                isYellow = true;
            } 

            // tenth layer
            if (i >= 32 && i <= 33 && j >= 35 && j <= 38) {
                pixelColor = '#406F3F'; // dark green
            } 

            if (i >= 32 && i <= 33 && j >= 39 && j <= 42) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 32 && i <= 33 && j >= 43 && j <= 44) {
                pixelColor = '#406F3F'; // dark green
            } 

            if (i >= 32 && i <= 33 && j >= 45 && j <= 46) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 32 && i <= 33 && j >= 47 && j <= 50) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 32 && i <= 33 && j >= 51 && j <= 56) {
                pixelColor = '#406F3F'; // dark green
            } 

            // eleventh layer
            if (i >= 30 && i <= 31 && j >= 33 && j <= 34) {
                pixelColor = '#406F3F'; // dark green
            } 

            if (i >= 30 && i <= 31 && j >= 35 && j <= 38) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 30 && i <= 31 && j >= 39 && j <= 42) {
                pixelColor = '#406F3F'; // dark green
            } 

            if (i >= 30 && i <= 31 && j >= 43 && j <= 48) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 30 && i <= 31 && j >= 49 && j <= 52) {
                pixelColor = '#406F3F'; // dark green
            } 

            if (i >= 30 && i <= 31 && j >= 53 && j <= 56) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 30 && i <= 31 && j >= 57 && j <= 58) {
                pixelColor = '#406F3F'; // dark green
            } 

            // 12th layer
            if (i >= 28 && i <= 29 && j >= 33 && j <= 36) {
                pixelColor = '#CC322E'; 
                isBlinking = true;
                isRed = true;
            } 

            if (i >= 28 && i <= 29 && j >= 37 && j <= 38) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 28 && i <= 29 && j >= 39 && j <= 42) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 28 && i <= 29 && j >= 43 && j <= 48) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 28 && i <= 29 && j >= 49 && j <= 52) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 28 && i <= 29 && j >= 53 && j <= 56) {
                pixelColor = '#2321CB'; // main blue
                isBlinking = true;
                isBlue = true;
            } 

            // 13th layer
            if (i >= 26 && i <= 27 && j >= 31 && j <= 32) {
                pixelColor = '#406F3F'; 
            } 

            if (i >= 26 && i <= 27 && j >= 33 && j <= 36) {
                pixelColor = '#CC322E'; // red
                isBlinking = true;
                isRed = true;
            }  

            if (i >= 26 && i <= 27 && j >= 37 && j <= 52) {
                pixelColor = '#52943D';
            }  

            if (i >= 26 && i <= 27 && j >= 53 && j <= 56) {
                pixelColor = '#2321CB';
                isBlinking = true;
                isBlue = true;
            }  

            if (i >= 26 && i <= 27 && j >= 57 && j <= 62) {
                pixelColor = '#406F3F';
            }  

            //14th layer
            if (i >= 24 && i <= 25 && j >= 31 && j <= 32) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 24 && i <= 25 && j >= 33 && j <= 34) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 24 && i <= 25 && j >= 35 && j <= 36) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 24 && i <= 25 && j >= 37 && j <= 40) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 24 && i <= 25 && j >= 41 && j <= 44) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 24 && i <= 25 && j >= 45 && j <= 50) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 24 && i <= 25 && j >= 51 && j <= 54) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 24 && i <= 25 && j >= 55 && j <= 56) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 24 && i <= 25 && j >= 57 && j <= 60) {
                pixelColor = '#EEF1E9'; 
            } 

            // 15th layer
            if (i >= 22 && i <= 23 && j >= 35 && j <= 36) {
                pixelColor = '#52943D';
            }    
            
            if (i >= 22 && i <= 23 && j >= 37 && j <= 40) {
                pixelColor = '#EEF1E9';
            }              

            if (i >= 22 && i <= 23 && j >= 41 && j <= 44) {
                pixelColor = '#52943D';
            }    
            
            if (i >= 22 && i <= 23 && j >= 45 && j <= 46) {
                pixelColor = '#406F3F'; // dark green
            } 

            if (i >= 22 && i <= 23 && j >= 47 && j <= 58) {
                pixelColor = '#52943D';
            }    

            // 16th layer
            if (i >= 20 && i <= 21 && j >= 37 && j <= 40) {
                pixelColor = '#406F3F';
            }   
            
            if (i >= 20 && i <= 21 && j >= 41 && j <= 44) {
                pixelColor = '#52943D';
            }   
            
            if (i >= 20 && i <= 21 && j >= 45 && j <= 48) {
                pixelColor = '#406F3F';
            }   

            if (i >= 20 && i <= 21 && j >= 49 && j <= 50) {
                pixelColor = '#52943D';
            }  

            if (i >= 20 && i <= 21 && j >= 51 && j <= 54) {
                pixelColor = '#406F3F';
            }   

            //17th layer
            if (i >= 18 && i <= 19 && j >= 37 && j <= 52) {
                pixelColor = '#406F3F';
            }   

            // 18th layer
            if (i >= 16 && i <= 17 && j >= 35 && j <= 36) {
                pixelColor = '#406F3F';
            }   

            if (i >= 16 && i <= 17 && j >= 37 && j <= 38) {
                pixelColor = '#EEF1E9';
            } 

            if (i >= 16 && i <= 17 && j >= 39 && j <= 42) {
                pixelColor = '#2321CB'; //blue
                isBlinking = true;
                isBlue = true;
            } 

            if (i >= 16 && i <= 17 && j >= 43 && j <= 44) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 16 && i <= 17 && j >= 45 && j <= 46) {
                pixelColor = '#52943D'; 
            } 

            if (i >= 16 && i <= 17 && j >= 47 && j <= 50) {
                pixelColor = '#EEF1E9'; 
            } 

            if (i >= 16 && i <= 17 && j >= 51 && j <= 56) {
                pixelColor = '#406F3F'; // dark green
            } 

            // 19th layer
            if (i >= 14 && i <= 15 && j >= 35 && j <= 38) {
                pixelColor = '#EEF1E9';
            }   

            if (i >= 14 && i <= 15 && j >= 39 && j <= 42) {
                pixelColor = '#2321CB';
                isBlinking = true;
                isBlue = true;
            }

            if (i >= 14 && i <= 15 && j >= 43 && j <= 50) {
                pixelColor = '#52943D';
            }

            if (i >= 14 && i <= 15 && j >= 51 && j <= 52) {
                pixelColor = '#EEF1E9';
            }

            if (i >= 14 && i <= 15 && j >= 55 && j <= 56) {
                pixelColor = '#EEF1E9';
            }

            //20th layer
            if (i >= 12 && i <= 13 && j >= 41 && j <= 42) {
                pixelColor = '#52943D';
            }   

            if (i >= 12 && i <= 13 && j >= 43 && j <= 44) {
                pixelColor = '#EEF1E9';
            }  

            if (i >= 12 && i <= 13 && j >= 45 && j <= 50) {
                pixelColor = '#52943D';
            } 

            if (i >= 12 && i <= 13 && j >= 51 && j <= 52) {
                pixelColor = '#CC322E'; //red
                isBlinking = true;
                isRed = true;
            } 

            // 21th layer
            if (i >= 10 && i <= 11 && j >= 41 && j <= 44) {
                pixelColor = '#EEF1E9';
            }  

            if (i >= 10 && i <= 11 && j >= 45 && j <= 46) {
                pixelColor = '#52943D';
            } 

            if (i >= 10 && i <= 11 && j >= 47 && j <= 50) {
                pixelColor = '#EEF1E9';
            }  

            //22nd layer
            if (i >= 8 && i <= 9 && j >= 43 && j <= 48) {
                pixelColor = '#EEF1E9';
            }  

            // star 1st layer
            if (i >= 6 && i <= 7 && j >= 45 && j <= 46) {
                pixelColor = '#E0C673';
            }  
            // 2nd
            if (i >= 4 && i <= 5 && j >= 43 && j <= 48) {
                pixelColor = '#E0C673';
            }  


            //3rd layer
            if (i >= 2 && i <= 3 && j >= 41 && j <= 44) {
                pixelColor = '#D5D9BB';
            }  

            if (i >= 2 && i <= 3 && j >= 45 && j <= 50) {
                pixelColor = '#E0C673';
            } 

            //4th layer
            if (i >= 0 && i <= 1 && j >= 45 && j <= 46) {
                pixelColor = '#D5D9BB';
            }  

            // // Specify colors for specific cells
            // if (i >= 36 && j >= 10 && j <= 58) {
            //     pixelColor = '#FF0000'; // Example: Set the color for the cell at row 5, column 10 to red
            // } 

            // if (i >= 33 && i <= 35 && j >= 14 && j <= 54) {
            //     pixelColor = '#FF0000'; // Example: Set the color for the cell at row 5, column 10 to red
            // } 
            
            const pixel = createPixel(pixelColor, isBlinking, isRed, isBlue, isYellow);
            pixel.style.width = pixelSize + 'px';
            pixel.style.height = pixelSize + 'px';
            canvas.appendChild(pixel);

        }


    }

}



generateGrid(54, 96, 15);

