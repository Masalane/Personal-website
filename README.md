
SET-UP INSTRUCTIONS

    1. Download and unzip the microservice folder.
    2. Download and install Visual Studio (VS) Code, latest version.
    3. Download and install node.js, latest version
    4. Open the VS Code, --> go to 'File', --> go to 'Add folder to workspace' and add the microservice folder.
    5. Open the VS code terminal. Type node index.js in the terminal.
    6. Your the application won't launch because we are missing express framework.
    7. While still in the same dir, Type 'npm install --save-exact express' 
    8. Now, type 'node index.js' on your terminal. This shoud work.
    9. Now, go to your browser, preferably Google chrome/Firefox and type 'http://localhost:8080/purchaseVoucher/create'
    

    OR

    Go to 'http://kabelo.azurewebsites.net/purchaseVoucher/create'


DESIGN APPROACH

Presented below are the technologies used to build the microservice. This document substantiate in brief why such technologies were used.

Tools:

    1. Node.js with express framework : 
        Motive behind using node.js is because it is an open source tool. Knowing that open source sofwares are supported by large open source community gives an impression that such softwares are highly maintained and are efficient.

    2. Source control - Git
        Node.js is a runtime javaScript environment which influenced the use of javaScript to write this application.

    3. Testing server - Travis CI 
        Travis and git are widely used CI/CD open source tools. This influenced the use of these tools in this assessment. Moreover, they have a relatively strong open source community support.

    4. URL host - microsoft Azure
        Use of azure to host the application was genuinly influenced by the fact that it is compatible 
        with Travis and easy to use.

    5. Storage system - JSON file
        The microservice makes use of a JSON file as a storage system. This was influenced the simplicity associated 
        with JSON i.e querries in JSON file are relatively easy compared to other storage systems.
