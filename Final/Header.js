import React from "react";

export default function Header(){
    
 const title = "INFORMASI SAYA"
const sub = "Welcome to My website"
return(
    
    <>
    <div>
    <h1>{title}</h1>
  <h3>{sub}</h3>
  <hr></hr>
  <img src="https://scontent.fupg1-1.fna.fbcdn.net/v/t1.6435-9/75266221_298956431257162_2124704207500016349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFOn_cNQSOd-ix6ZVcQswMuLQ73pzReJy0tDvenNF4nLe3jMu-bppTZOhxC_fLNhoCoy1zr3r5NErBt4pQ5oksX&_nc_ohc=sArE6ct5y7wAX9vIGF6&_nc_ht=scontent.fupg1-1.fna&oh=00_AT9i8CFd2EyYFnn5H606k7EVCRcD3vsXbvGC8XW19p61iQ&oe=62E178D7" width={320} height={280} />
  
  <p>Nama           : Timmothy Patrick Rafael Wauran</p>
  <p>Gender         : Laki-Laki</p>
  <p>Hobi           : Gaming</p>
  <p>Tgl.Lahir      : 19/10/2002</p>
  <p>Agama          : kristen Advent</p>
  <br></br>
</div>

    </>
)
}
