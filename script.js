 
function ingreso()
{
    /*document.getElementById("mensaje").innerHTML = "Hola Marte!!!!";*/
    
   
    /*let cadena = document.querySelector(".input-texto").value;
    const longitud = cadena.length;*/
     
    /*document.getElementById("muneco").style.display = 'none';*/
    document.getElementById("lad-derecho").style.height =  "400px";
   
    document.getElementById("muneco").style.display =  "none";
    
    document.getElementById("ingreso-texto").style.display = 'none';
    document.getElementById("mensaje").style.display = 'none';

/*    document.getElementById("cajatextodiv").style.display ="grid";*/
      document.getElementById("cajatexto").style.display ="flex";
    document.getElementById("copiarId").style.display ="flex";
    
    /*document.getElementById("ingreso-texto").style.visibility = 'hidden';
    document.getElementById("mensaje").innerHTML = cadena;*/
    

}
function salida(){
      document.getElementById("muneco").style.display =  "grid";
    
      document.getElementById("ingreso-texto").style.display = 'grid';
      document.getElementById("mensaje").style.display = 'grid';
      document.getElementById("cajatextodiv").style.display ="none";
}

function clave(letra){
    let aumento = 0;
    let numeroletra = 0;
    let codigo="";
  
    switch (letra){
      case 'a':
          codigo="ai";
          numeroletra = codigo.length-1;
          
          break;
      case 'e':
          codigo="enter";
          numeroletra = codigo.length-1;
          
          break;
      case 'i':
          codigo='imes';
          numeroletra = codigo.length-1;
        
        break;
      case 'o':
          codigo = "ober";
          numeroletra = codigo.length-1;
        
        break;
      case 'u':
          codigo = 'ufat';
          numeroletra = codigo.length-1;
        
          break;
      default:
          codigo = letra;
          numeroletra = codigo.length-1;
    }
    return [numeroletra, codigo];
  
  }
  
  
  
  function encriptar(){
     
    ingreso();
      /*let cadena=document.getElementById("#textotrabajo").value ;*/
      let cadena=document.querySelector(".input-texto").value; 
      let loncadena=cadena.length;
      var cadenatemp="";
      let pedazocadena="";
    
      for(var i=0; i < cadena.length; i++) {
        
        switch (cadena[i]){
          case 'a':
               var [pos,texto] = clave(cadena[i]);
                pedazocadena = texto;
                break;
          case 'e':
                var [pos,texto] = clave(cadena[i]);
                pedazocadena = texto;
                break;
          case 'i':
                 var [pos,texto] = clave(cadena[i]);
                pedazocadena = texto;
                break;
                
          case 'o':
                var [pos,texto] = clave(cadena[i]);
                pedazocadena = texto;
                break;
          case 'u':
                var [pos,texto] = clave(cadena[i]);
                pedazocadena = texto;
                break;
          default:
                /*pedazocadena = cadena[i]*/
                var [pos,texto] = clave(cadena[i]);
                pedazocadena = texto;
                break;
        }
       
        cadenatemp = cadenatemp + pedazocadena;
        pedazocadena=""; 
   
        } 
  
      cadena = cadenatemp;
      
      /*document.getElementById("mensaje").innerHTML = cadena;*/
      document.getElementById("cajatexto").innerHTML = cadena; 
      /*var altura = cadena.length * 2 ;     
      let valor = altura.toString() + "px";
      document.getElementById("contenedor-marco").style.height = valor;*/     
      document.querySelector(".input-texto").value = "";
        

  
  }
  
  
  
  
  function desencriptar(){
  
      
  let cadena=document.querySelector(".input-texto").value;
  let loncadena=cadena.length;
  var cadenatemp="";
  let pedazocadena="";
  ingreso();
  
  for(var i=0; i < cadena.length; i++) {
    
        switch (cadena[i]){
          case 'a':
               
  
                var [pos,texto] = clave(cadena[i]);
                pedazocadena = cadena[i];
                i = i + pos;              
  
                break;
          case 'e':
                var [pos,texto] = clave(cadena[i]);
                pedazocadena = cadena[i];
                i = i + pos;
                break;
          case 'i':
                var [pos,texto] = clave(cadena[i]);
                pedazocadena = cadena[i];
                 i = i + pos;
                break;
                
          case 'o':
                var [pos,texto] = clave(cadena[i]);
                  pedazocadena = cadena[i];
                  i = i + pos;
                break;
          case 'u':
                var [pos,texto] = clave(cadena[i]);
                  pedazocadena = cadena[i];
                  i = i + pos;
                break;
          default:
                /*pedazocadena = cadena[i]*/
                var [pos,texto] = clave(cadena[i]);
                pedazocadena = cadena[i];
                i = i + pos;
                break;
        }
  
    cadenatemp = cadenatemp + pedazocadena;
    pedazocadena="";
    } 
  cadena = cadenatemp;
  
  document.getElementById("cajatexto").innerHTML = cadena;  
  document.querySelector(".input-texto").value = "";
  
  }

  function copiar() {
      /*
      var contenido = document.getElementById('cajatexto');
      
      /*contenido.select();
      document.selection.createRange()

      document.execCommand('copy');
      document.getElementById("cajatexto").innerHTML ="";*/
      
     /* salida();*/
     let copyText = document.getElementById('cajatexto').innerText 
     const textArea = document.createElement('textarea');
     textArea.textContent = copyText;
     document.body.append(textArea);       
     textArea.select();       
     document.execCommand("copy");       
     // Delete created Element       
     textArea.remove() 
     document.getElementById("cajatexto").innerHTML ="";
     alert("Copied!");
  }