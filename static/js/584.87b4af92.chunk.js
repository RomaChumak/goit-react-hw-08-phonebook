"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[584],{1584:function(n,e,r){r.r(e),r.d(e,{default:function(){return Q}});var o,t,i,a,d,s,c,l,p,u,x,b,g,m=r(2791),h=r(9434),f=r(4270),Z=r(6916),j=function(n){return n.contacts.contacts},v=function(n){return n.filter},w=function(n){return n.contacts.isLoading},y=(0,Z.P1)([j,v],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),P=r(208),k=r(168),C=r(5867),_=C.ZP.div(o||(o=(0,k.Z)(["\n    display: flex;\n    gap: 40px;\n    max-width: 1200px;\n    margin: 0px auto;\n    padding: 0px 15px;\n    justify-content:center;\n"]))),z=C.ZP.li(t||(t=(0,k.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    background-color: rgb(204, 204, 204);\n    border: 3px solid rgb(204, 204, 204);\n    border-radius: 5px;\n    margin-bottom: 10px;\n    gap: 20px;\n"]))),L=C.ZP.p(i||(i=(0,k.Z)(["\n    color: indigo;\n    font-size: 20px;\n    font-weight: bold;\n"]))),q=C.ZP.p(a||(a=(0,k.Z)(["\n    color: rgb(102, 102, 102);\n"]))),A=C.ZP.button(d||(d=(0,k.Z)(["\n    background-color: indigo;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    padding: 5px 10px;\n    cursor: pointer;\n"]))),F=r(184),N=function(){var n=(0,h.I0)(),e=(0,h.v9)(y);return(0,F.jsx)("div",{children:e.map((function(e){var r=e.id,o=e.name,t=e.number;return(0,F.jsxs)(z,{children:[(0,F.jsxs)(L,{children:[o,":"]})," ",(0,F.jsx)(q,{children:t}),(0,F.jsx)(A,{onClick:function(){return n((0,P.GK)(r))},children:"Delete"})]},r)}))})},I=r(5705),B=r(6727),R=(0,C.ZP)(I.l0)(s||(s=(0,k.Z)(["\n    padding: 10px;\n    background-color: rgb(204, 204, 204);\n    border: 3px solid rgb(204, 204, 204);\n    border-radius: 5px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-top: 20px;\n    height: 400px;\n"]))),S=C.ZP.label(c||(c=(0,k.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nwidth: 300px;\ncolor: indigo;\nfont-size: 20px;\nfont-weight: bold;\n"]))),J=(0,C.ZP)(I.gN)(l||(l=(0,k.Z)(["\npadding: 10px;\n    border: 1px solid rgb(204, 204, 204);\n    border-radius: 4px;\n    background-color: rgb(238, 237, 240);\n"]))),T=C.ZP.button(p||(p=(0,k.Z)(["\nbackground-color: indigo;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    padding: 10px;\n    cursor: pointer;\n"]))),D=(0,C.ZP)(I.Bc)(u||(u=(0,k.Z)(["\n    color: red;\n    font-size: 14px;\n    margin-top: 4px;\n    font-weight: normal;\n"]))),E=B.Ry().shape({name:B.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),number:B.Z_().min(9,"9 digits required!").max(19,"Less than 16 symbols!").matches(/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),G=function(){var n=(0,h.I0)(),e=(0,h.v9)(j);return(0,F.jsx)(I.J9,{initialValues:{name:"",number:""},validationSchema:E,onSubmit:function(r,o){if(e.some((function(n){var e=n.name,o=n.number;return e.toLowerCase()===r.name.toLowerCase()||o===r.number})))return alert("".concat(r.name," or ").concat(r.number,"is already in contacts."));n((0,P.Ft)(r)),o.resetForm()},children:(0,F.jsxs)(R,{children:[(0,F.jsx)("h1",{children:"Phonebook"}),(0,F.jsxs)(S,{children:["Name",(0,F.jsx)(J,{type:"text",name:"name"}),(0,F.jsx)(D,{name:"name",component:"div"})]}),(0,F.jsxs)(S,{children:["Number",(0,F.jsx)(J,{type:"tel",name:"number"}),(0,F.jsx)(D,{name:"number",component:"div"})]}),(0,F.jsx)(T,{type:"submit",children:"Add Contact"})]})})},K=r(7635),M=C.ZP.div(x||(x=(0,k.Z)(["\n    background-color: rgb(204, 204, 204);\n    border: 3px solid rgb(204, 204, 204);\n    border-radius: 5px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    margin-top: 20px;\n    height: 300px;\n"]))),V=C.ZP.label(b||(b=(0,k.Z)(["\n    color: indigo;\n    font-size: 20px;\n    font-weight: bold;\n"]))),$=C.ZP.input(g||(g=(0,k.Z)(["\npadding: 10px;\n    border: 1px solid rgb(204, 204, 204);\n    border-radius: 4px;\n    background-color: rgb(238, 237, 240);\n"]))),H=r(6364),O=function(){var n=(0,h.I0)(),e=(0,h.v9)(v);return(0,F.jsxs)(M,{children:[(0,F.jsx)("h2",{children:"Contacts"}),(0,F.jsx)(V,{children:"Find Contacts By Name"}),(0,F.jsx)($,{type:"text",value:e,onChange:function(e){return n((0,H.x)(e.target.value.trim()))}})]})};function Q(){var n=(0,h.I0)(),e=(0,h.v9)(w);return(0,m.useEffect)((function(){n((0,P.yF)())}),[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(f.q,{children:(0,F.jsx)("title",{children:"Contacts"})}),(0,F.jsxs)(_,{children:[(0,F.jsx)(G,{}),(0,F.jsx)(O,{}),(0,F.jsx)("div",{children:e&&K.a}),(0,F.jsx)(N,{})]})]})}}}]);
//# sourceMappingURL=584.87b4af92.chunk.js.map