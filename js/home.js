function dev()
{
    window.location.href ="dev.html";
}
document.addEventListener('contextmenu', event => event.preventDefault());


/*function submit1()
{
    ------------subject-------------  
    var sem5 = document.getElementById("Semster5").value; */

    //var sem = document.getElementById("Semster");

    /*------------subject--------------------
    var DAAth = document.getElementById("DAAth").value;
    var DAAlab = document.getElementById("DAAlab").value;
    var OS  = document.getElementById("OS").value;
    var SP = document.getElementById("SP").value;
    var ML = document.getElementById("ML").value;
    var MLLAB = document.getElementById("MLLAB").value;
    var P_Javalab =document.getElementById("P_Javalab").value;
    var P_Javath = document.getElementById("P_Javath").value;
    var WMS =document.getElementById("WMS").value;
    var WMSlab = document.getElementById("WMSlab").value;
    var cc = document.getElementById("cc").value;
    var apt = document.getElementById("apt").value;
    var ss = document.getElementById("ss").value;
    */
    //var sub = document.getElementById("subject");

    /*------------breif--------------------
    var Syllabus = document.getElementById("Syllabus").value;
    var chapters = document.getElementById("chapters").value;
    
    var breif = document.getElementById("Breif");


    var _sem = sem.value;
    var _sub = sub.value;
    var _breif = breif.value;
    
    if(_sem= ("Semster5")){
        if(_sub=("DAAth"))
        {
            if(_breif=("syllbus")){
                window.location.href ="syllbus/daath.html";
            }
            
        }
    }

    if(sem=="sem"){
        if(sub=="DAAth"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/daath.html";
            }
        }
    }
    



}*/
function submit()
{
    
    var sub = document.querySelector('#subject').value;
    var sem = document.querySelector('#semster').value;
    var breif = document.querySelector('#Breif').value;
    if(sem=="Semster5"){ if(sub=="DAAth"){
          if(breif=="Syllabus"){
           
                window.location.href="syllbus/DAAth.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/DAAth.html";
            }
        }
        else if(sub=="DAAlab"){
                if(breif=="Syllabus"){
                    window.location.href="syllbus/DAAlab.html";
                }
                else if(breif == "chapters"){
                    window.location.href="chapters/DAAlab.html";
                }
            
        }
        else if(sub=="OS"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/OS.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/OS.html";
            }
        }
        else if(sub=="SP"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/SP.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/SP.html";
            }
            
        }
        else if(sub=="ML"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/ML.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/ML.html";
            }
            
        }
        else if(sub=="MLLAB"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/MLLAB.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/MLLAB.html";
            }
            
        }
        else if(sub=="P_Javath"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/P_Javath.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/P_Javath.html";
            }
            
        }
        else if(sub=="P_Javalab"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/P_Javalab.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/P_Javalab.html";
            }
            
        }
        else if(sub=="WMS"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/WMS.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/WMS.html";
            }
            
        }
        else if(sub=="WMSlab"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/WMSlab.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/WMSlab.html";
            }
            
        }
        else if(sub=="cc"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/cc.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/cc.html";
            }
            
        }
        else if(sub=="apt"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/apt.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/apt.html";
            }
            
        }
        else if(sub=="ss"){
            if(breif=="Syllabus"){
                window.location.href="syllbus/ss.html";
            }
            else if(breif == "chapters"){
                window.location.href="chapters/ss.html";
            }
            
        }

        
    }
    
    
    
}