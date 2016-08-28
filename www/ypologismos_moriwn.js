var page = new tabris.Page({
  title: "Μόρια Πανελληνίων",
  topLevel: true,
  background: "#b3b3b3"
});


var scrollView = new tabris.ScrollView({left: 0, top: 0, right: 0, bottom: 0}).appendTo(page);

new tabris.TextView({
  id: "Op",
  markupEnabled:true,
  text: "<big><b>Επιλέξτε Ομάδα Προσανατολισμού:</b></big>",
  textColor:"#8b0000",
}).appendTo(scrollView);

new tabris.RadioButton({
  id: "anthr",
  markupEnabled:true,
  text: "Ανρθωπιστικών Σπουδών",
  textColor:"#000000",
  selection: true

}).appendTo(scrollView);

new tabris.RadioButton({
  id: "thet",
  text: "Θετικών Σπουδών",
  textColor:"#000000"
}).appendTo(scrollView);

new tabris.RadioButton({
  id: "oikpl",
  text: "Οικονομίας-Πληροφορικής",
  textColor:"#000000"
}).appendTo(scrollView);


scrollView.apply({
  "#Op": { layoutData: {left:40, top:10, right:10 }},
  "#anthr":{ layoutData: {left:40, top: 100}},
  "#thet": { layoutData: {left:40, top: 200}},
  "#oikpl":{ layoutData: {left:40, top: 300}},
});

//object cunstructor
function page_cr(pr, de, tr, te, pe, ek, ped_A, ped_B,ped_G){
  this.pr = pr;
  this.de = de;
  this.tr = tr;
  this.te = te;
  this.pe = pe;
  this.ek = ek;
  this.ped_A = ped_A;
  this.ped_B = ped_B;
  this.ped_G = ped_G;
};

var anthr= new page_cr("Αρχαία", "Ιστορία", "Έκθεση", "Λατινικά", "Βιολογία Γ.Π.", "Μαθηματικά Γ.Π.", "1ο", "3ο", "4ο"),
    thet = new page_cr("Φυσική", "Χημεία", "Έκθεση", "Μαθηματικά Ο.Π.", "Βιολογία Ο.Π.", "Ιστορία Γ.Π.", "2ο", "3ο", "4ο"),
    oikpl = new page_cr("Μαθηματικά","ΑΕΠΠ", "Έκθεση", "ΑΟΘ", "Βιολογία Γ.Π.", "Ιστορία Γ.Π.", "5ο", "3ο", "4ο");

new tabris.Button({
  id: "next1",
  text: "Επόμενο",
  background: "#8b0000",
  textColor: "white",
  layoutData:{top:390,right:10,left:10}
}).on("select", function() {
	page2_cr();
}).appendTo(scrollView);

function page2_cr() {
      var op = "none";
  scrollView.children("RadioButton").forEach(function(button) {
  if (button.get("selection")) {
      op = button.get("id");
    }
  });
console.log(op);

  if(op==="anthr"){
    var x = anthr;
  }else if(op==="thet"){
    var x = thet;
  }else{
    var x = oikpl;
  };
  var page2 = new tabris.Page({
    title: "Μόρια Πανελληνίων",
    toplevel:false,
    background:"#b3b3b3"
  });
     //page2

  new tabris.TextView({
    layoutData: {left: 10, top: "prev() 5", right: 10},
    markupEnabled: true,
    text: "Υποχρεωτικά μαθήματα:",
    alignment: "center",
    textColor:"#8b0000",
    font:"16px"
  }).appendTo(page2);


  var comp1 = new tabris.Composite({
    layoutData:{top: "30", right: 0, left:0, height:40,},
    background:"#808080",
  }).appendTo(page2);
  var b11 = tabris.create("TextInput", {
    layoutData:{top:"prev() 0",left:0,right:0,height:40},
    alingment:"center",
    font: "18px sans-serif",
    message: x.pr ,
    keyboard:"number",
    background:"#808080",
  }).appendTo(comp1);

  var def=b11.get("text");

  var comp2 = new tabris.Composite({
    layoutData:{top:[comp1,-5],left:0,right:0,height:40},
    background:"#8c8c8c"
  }).appendTo(page2);
  var b22 = tabris.create("TextInput", {
    layoutData: {top:"prev() 0", left:0, right:0,height:40},
    message: x.de ,
    keyboard:"number",
    background:"#8c8c8c",
    font: "18px sans-serif"
  }).appendTo(comp2);

  var comp3 = new tabris.Composite({
    layoutData:{top:[comp2,-5],left:0,right:0, height:40},
    background:"#999999"
  }).appendTo(page2);
  var b33 = tabris.create("TextInput", {
    layoutData: {top:"prev() 0", left:0, right:0,height:40},
    message: x.tr ,
    keyboard:"number",
    background:"#999999",
    font: "18px sans-serif",
  }).appendTo(comp3);

  new tabris.TextView({
    layoutData: {left: 10, top: "prev() 3", right:10 },
    markupEnabled:true,
    text: "Μαθήματα επιλογής(επέλεξε 1 ή 2):",
    alignment: "center",
    textColor:"#8b0000",
    font:"16px"
  }).appendTo(page2);

  var comp4 = new tabris.Composite({
    layoutData:{top:"prev() 3", left:0, right:0, height:40},
    background:"#808080"
  }).appendTo(page2);
  var b44 = tabris.create("TextInput", {
    layoutData:{top:"prev() 0", left:0, right:0,height:40},
    message:x.te ,
    keyboard:"number",
    background:"#808080",
    font: "18px sans-serif",
  }).appendTo(comp4);

  var comp5 = new tabris.Composite({
    layoutData:{top:[comp4, -5], left:0, right:0,height:40},
    background:"#8c8c8c"
  }).appendTo(page2);
  var b55 = tabris.create("TextInput", {
    layoutData:{top:"prev() 0", left:0, right:0,height:40},
    message:x.pe ,
    keyboard:"number",
    background:"#8c8c8c",
    font: "18px sans-serif",
  }).appendTo(comp5);

  var comp6 = new tabris.Composite({
    layoutData:{top:[comp5,-5], left:0, right:0,height:40},
    background:"#999999"
  }).appendTo(page2);
  var b66 = tabris.create("TextInput", {
    layoutData:{top:"prev() 0", left:0, right:0,height:40},
    message:x.ek ,
    keyboard:"number",
    background:"#999999",
    font: "18px sans-serif",
  }).appendTo(comp6);

  new tabris.TextView({
    layoutData:{top:"prev() 3", left:10, right:10},
    text:"Ειδικό μάθημα(προαιρετικό):",
    textColor:"#8b0000",
    font:"16px",
    alignment:"center"
  }).appendTo(page2);

  var comp_e1 = new tabris.Composite({
    layoutData:{top:"prev() 3", left:0,right:0, height:40},
    background:"#a19f91"
  }).appendTo(page2)
  var b_e11 = new tabris.TextInput({
    layoutData:{left:0, right:0},
    message:"Μάθημα με συντελεστή 1",
    keyboard:"number",
    background:"#a19f91",
    font: "18px sans-serif",
  }).appendTo(comp_e1);

  var comp_e2 = new tabris.Composite({
    layoutData:{top:"prev() -5", left:0, right:0, height:40},
    background:"#adab9f"
  }).appendTo(page2)
  var b_e22 = new tabris.TextInput({
    layoutData:{right:0, left:0},
    message:"Μάθημα με συντελεστή 2",
    keyboard:"number",
    font:"18px sans-serif",
    background:"#adab9f"
  }).appendTo(comp_e2);

  new tabris.Button({
    id:"ypologise",
    font:"18px",
    text:"Υπολόγισε τα μόριά σου",
    textColor:"white",
    layoutData:{top:"prev() 80",left:"10", right:"10", height:60},
    background:"#8b0000",
    alignment:"center"
  }).on("select", function(){
     ypologise();
  }).appendTo(page2);
  page2.open();
  var message1,
      message2
  function ypologise() {

      var b1=b11.get("text"),
          b2=b22.get("text"),
          b3=b33.get("text"),
          b4=b44.get("text"),
          b5=b55.get("text"),
          b6=b66.get("text"),
          b_e1=b_e11.get("text"),
          b_e2=b_e22.get("text");

      if(message1){
         message1.dispose();
       };
      if(message2){
         message2.dispose();
       };
//ελεγχοι
      if( b1===def || b2===def || b3===def) {
         message1 = new tabris.TextView({
            layoutData:{top:400},
            markupEnabled:true,
            text:"<big><b><i>Πρέπει να βάλεις βαθμό και στα 3 υποχρεωτικά μαθήματα!</big></b></i>",
            alignment:"center",
            textColor:"#ff0000"
         }).appendTo(page2);
     }else if(b4===def && b5===def && b6===def){
       message1=new tabris.TextView({
         layoutData:{top:400},
         markupEnabled:true,
         text:"<big><b><i>Πρέπει να επιλέξεις τουλάχιστον 1 μάθημα επιλογής!</big></b></i>",
         textColor:"#ff0000",
         alignment:"center"
       }).appendTo(page2);
     }else if(!(b4===def) && !(b5===def) && !(b6===def)){
        message1= new tabris.TextView({
          layoutData:{top:400},
          markupEnabled:true,
          text:"<big><b><i>Μπορείς να επιλέξεις μέχρι 5 μαθήματα!</big></b></i>",
          textColor:"#ff0000",
          alignment:"center"
        }).appendTo(page2);
      }else if( b1<0 || b1>20 || b2<0 || b2>20 || b3<0 || b3>20 || b4<0 || b4>20 || b5<0 || b5>20 || b6<0 || b6> 20 ){
          message1 = new tabris.TextView({
            layoutData:{top:400},
            markupEnabled:true,
            text:"<big><b><i>Οι βαθμοί πρέπει να είναι στην κλίμακα 1-20(π.χ. 12.8)!</big></b></i>",
            textColor:"#ff0000",
            alignment:"center"
          }).appendTo(page2);
      }else{
        //επιλογή επιστημονικών πεδίων και υπολογισμος μοριων
          var a,b,moria1,moria2;

          if(b4===def){
            if(b5===def){
              a = x.ped_G;
              moria1 = b1*200 + b2*200 + b3*330 + b6*270;
            }else if(b6===def){
              a = x.ped_B ;
              if(op=="thet"){
                moria1 = b1*200 + b2*270 + b3*200 + b5*330;
              }else{
              	moria1 = b1*200 + b2*200 + b3*240 + b5*290;
              };
            }else{
              a = x.ped_B;
              b = x.ped_G;
              moria2 = b1*200 + b2*200 + b3*330 + b6*270;
              if(op=="thet"){
                moria1 = b1*200 + b2*270 + b3*200 + b5*330;
              }else{
                moria1 = b1*200 + b2*200 + b3*240 + b5*290;
              }
            };
          }else if(b5===def){
            if(b6===def){
              a = x.ped_A;
              if(op=="anthr"){
                moria1 = b1*330 + b2*270 + b3*200 + b4*200;
              }else if(op=="oikpl"){
                moria1 = b1*330 + b2*200 + b3*200 + b4*270;
              }else{
                moria1 = b1*270 + b2*200 + b3*200 + b4*330
              };
            }else{
              a = x.ped_A;
              b = x.ped_G;
              if(op =="anthr"){
                moria1 = b1*330 + b2*270 + b3*200 + b4*200;
                moria2 = b1*200 + b2*200 + b3*330 + b6*270;
              }else if(op=="oikpl"){
                moria1 = b1*330 + b2*200 + b3*200 + b4*270;
                moria2 = b1*200 + b2*200 + b3*330 + b6*270;
              }else{
                moria1 = b1*270 + b2*200 + b3*200 + b4*330
                moria2 = b1*200 + b2*270 + b3*200 + b4*330
              };
            };
          }else{
            a = x.ped_A;
            b = x.ped_B;
            if(op =="anthr"){
                moria1 = b1*330 + b2*270 + b3*200 + b4*200;
                moria2 = b1*200 + b2*200 + b3*240 + b5*290;
              }else if(op=="oikpl"){
                moria1 = b1*330 + b2*200 + b3*200 + b4*270;
                moria2 = b1*200 + b2*200 + b3*240 + b5*290;
              }else{
                moria1 = b1*270 + b2*200 + b3*200 + b4*330
                moria2 = b1*200 + b2*270 + b3*200 + b5*330;
              };
          };

        if (!(b_e1===def) && !(b_e2===def)) {
            message1 = new tabris.TextView({
              layoutData:{top:400},
              markupEnabled:true,
              text:"<big><b><i>Μπορείς να επιλέξεις μόνο 1 ειδικό μάθημα κάθε φορά</big></b></i>",
              textColor:"#ff0000",
              alignment:"center"
            }).appendTo(page2)
        }else{
          var eid = " :",
              top = 400;

          if(!(b_e1===def)){
            top = 378;
            eid = " με ειδικό μάθημα: ";
            moria1 = moria1 + b_e1*100;
            moria2 = moria2 + b_e1*100
          }else if(!(b_e2===def)){
            top = 378;
            eid = " με ειδικό μάθημα: ";
            moria1 = moria1 + b_e2*200;
            moria2 = moria2 + b_e2*200;
          };

          message1 = new tabris.TextView ({
            layoutData:{top:top},
            text: a + " Επιστημονικό Πεδίο" + eid + moria1,
            textColor:"#8b0000",
            font:"18px",
            alignment:"center"
           }).appendTo(page2);
          if( !(typeof b === 'undefined')){
            message2 = new tabris.TextView ({
              layoutData:{top:"prev() 0"},
              text: b + " Επιστημονικό Πεδίο" + eid + moria2,
              textColor:"#8b0000",
              font:"18px",
              alignment:"center"
            }).appendTo(page2);
          };
        };
      };
  };


};

page.open()
