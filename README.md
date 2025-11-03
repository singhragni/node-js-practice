# node-js-practice
Node js practice

# Module  export name and default 
- in one file name can be import multiple time.
- default can be import in one file once.


# Files 
# sync files - 
block the loop util operation   does not complete. 

# async files - 
# fs/promise
- previously we used  err first 
- now we used async await 
    
    # async can used through promisify 

# Libuv and Event Loop 
    - Event Loop
    - thread pool
    - Async I/O DNS LookUp , File , Crypto , compression(zlib)


# Event Loop Phase 
- Timer Phase (setTimeOut, setInterval)
- pending callback phase
- Idel /prepare phase 
- poll phase
- check phase (set immidiate)
- close

# queue priorities - 
- nextClick queue
- promise queue
- timer queue 
- poll queue
- check queue


# morgan 
-- dev debugger 

# Promise - 
Without promise - 
we  handle via call back functions .
that goes to callback hell and you do not have control also 



# Solution is Promise  - 
- Create Promise 
- handle the resolve and reject 
- can handle through then and catch or maker function async and handle via try and catch - 






