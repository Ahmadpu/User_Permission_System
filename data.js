 const ROLE = {
     ADMIN : 'admin',
     BASIC : 'basic'
 }
 module.exports = {ROLE : ROLE,
    users:[
      {id:1,name:'Ahmad' ,role:ROLE.ADMIN},
      {id:2,name:'Shahid',role:ROLE.BASIC},
      {id:3,name:'Dawood',role:ROLE.BASIC}
    ],
    projects:[
        {id:1,name:"Ahmad's project"  , userId:1},
        {id:2,name:"Shahid's project" , userId:2},
        {id:3,name:"Dawood's project" , userId:3},
    ]
}