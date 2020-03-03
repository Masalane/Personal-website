# Personal-website

Access the application at: 'http://kabelo.azurewebsites.net/purchaseVoucher/create'


OR alternatively, make a set-up on your local machine using the provided set of instructions.

SET-UP INSTRUCTIONS

    1. Download and unzip the microservice folder.
    2. Download and install Visual Studio (VS) Code, latest version.
    3. Download and install 'node.js', latest version
    4. Open the VS Code, --> go to 'File', --> go to 'Add folder to workspace' and add the microservice folder.
    5. Open the VS code terminal. Type 'npm install' followed by 'node index.js' in the terminal.
    6. The application won't launch because we are missing express framework.
    7. While still in the same dir, Type 'npm install --save-exact express' 
    8. Now, type 'node index.js' on your terminal. This shoud work.
    9. Now, go to your browser, preferably Google chrome and type 'http://localhost:8080/purchaseVoucher/create'


DESIGN APPROACH

Presented below are the technologies used to build the microservice. This document substantiate in brief why such technologies were used.

Tools:

    1. Node.js with express framework 
         Node.js is selected because it is an open source tool. Open source tools/softwares are supported by a large open source community resulting in highly maintained and efficient software products.

    2. Source control - Git
        Allows one to track code changes and allows reverts to a specific version where neccessary. It is good for collaboration in projects of 
        any scale.

    3. CI/CD server - Travis CI 
        Travis is a widely used CI/CD tool. It is capable of building, testing and deploying code with non-complex instructions. Moreover, it has a relatively strong open source community support.

    4. Application host - Microsoft Azure
        Microsoft azure integrates well with Travis CI. It also has a free trial version which allows one to host their 
        application for a fairly reasonable number of days. 

    5. Data Storage System - JSON file
        The microservice makes use of a JSON file as a storage system. This was influenced the simplicity associated 
        with JSON i.e querries in JSON file are relatively easy compared to other storage systems.


In conclusion, the aforementioned technologies were selected due to their ease of use, zero cost, efficiency and high open source community support.