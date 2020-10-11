var createform = document.createElement('form')
createform.setAttribute("style", "border: dashed 1.5px #ccc;background: #fbfbfb;padding: 11px;margin-bottom: 10px;")
createform.id = "form"


let div = document.createElement("div")
div.setAttribute("style", "box-shadow: 0px 0px 6px 3px #ededed;background: white;padding: 15px;overflow: hidden;width: 100%;text-align: center;margin-bottom: 20px!important;box-sizing: border-box;display: block;")
createform.appendChild(div)

let h1 = document.createElement("h1")
h1.setAttribute("style", "position: relative;text-align: center!important;")
h1.innerHTML = "Free Meta Tag Generator"
div.appendChild(h1)

let p = document.createElement("p")
p.innerHTML = "Meta tags are HTML tag content that provide metadata about your website such as description. Meta tags are used by search engines to help index and to provide relevant content in their search results"
div.appendChild(p)

/******* */

div_1 = document.createElement("div")
div.appendChild(div_1)

let site_title = document.createElement("label")
site_title.setAttribute("style", "color:#414141;font-family:nunito_sansregular;font-size: 15px")
site_title.innerHTML = "Site Title:"
div_1.appendChild(site_title)

var linebreak = document.createElement('br');
div_1.appendChild(linebreak);

let site_title_input = document.createElement("input")
site_title_input.setAttribute("type", "text")
site_title_input.setAttribute("name", "site_title")
site_title_input.setAttribute("placeholder", "Title must be between 70 character")
site_title_input.setAttribute("style", "border-radius:50px; height:50px")
div_1.appendChild(site_title_input)

/******* */

let div_2 = document.createElement("div")
div_2.setAttribute("style", "width: 50%;padding-right: 0;")
div.appendChild(div_2) 

let site_description = document.createElement("label")
site_description.setAttribute("style", "color: #414141!important;font-family: nunito_sansregular;font-size: 15px!important;")
site_description.innerHTML = "Site Description"
div_2.appendChild(site_description)

var linebreak = document.createElement('br');
div_2.appendChild(linebreak)

let site_description_input = document.createElement("input")
site_description_input.setAttribute("type","text")
site_description_input.setAttribute("name","site_description")
site_description_input.setAttribute("placeholder","Description must be within 150 characters")
site_description_input.setAttribute("style", "height: 50px!important;border-radius: 50px!important;")
div_2.appendChild(site_description_input)

// var line = document.createElement('hr'); 
// div_2.appendChild(line);

/******* */

let div_3 = document.createElement("div")
div_3.setAttribute("style", "width:50px;")
div.appendChild(div_3)

let site_keyword = document.createElement("label")
site_keyword.setAttribute("style", "color: #414141!important;font-family: nunito_sansregular;font-size: 15px!important;")
site_keyword.innerHTML = "Site Keywords (Separate with commas)"
div_3.appendChild(site_keyword)

var linebreak = document.createElement('br');
div_3.appendChild(linebreak)

let site_keyword_input = document.createElement("input")
site_keyword_input.setAttribute("type","text")
site_keyword_input.setAttribute("name","site_keyword")
site_keyword_input.setAttribute("style", "height: 50px!important;border-radius: 50px!important;")
site_keyword_input.setAttribute("placeholder","keyword1, keyword2, keyword3")
div_3.appendChild(site_keyword_input)

/******* */

let div_4 = document.createElement("div")
div_4.setAttribute("style", "width:50px;")
div.appendChild(div_4)

let robo_permission = document.createElement("label")
robo_permission.setAttribute("style", "color: #414141!important;font-family: nunito_sansregular;font-size: 15px!important;")
robo_permission.innerHTML = "Allow robots to index your website?"
div_4.appendChild(robo_permission)

var linebreak = document.createElement('br');
div_4.appendChild(linebreak)

var array = ["Yes","No"];

var selectList = document.createElement("select");
selectList.setAttribute("style", "height: 50px!important;border-radius: 50px!important;")
selectList.id = "mySelect";
selectList.name = "robotsIndex"
div_4.appendChild(selectList);

for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

/****** */

let div_5 = document.createElement("div")
div.appendChild(div_5)
let robo_permission_link = document.createElement("label")
robo_permission_link.innerHTML = "Allow robots to follow all links?"
div_5.appendChild(robo_permission_link)

var linebreak = document.createElement('br');
div_5.appendChild(linebreak)

var array = ["Yes","No"];
var selectList = document.createElement("select");
selectList.id = "mySelect";
selectList.name = "robotsLinks"
div_5.appendChild(selectList);

for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

/**** */

let div_6 = document.createElement("div")
div.appendChild(div_6)
let site_content_display = document.createElement("label")
site_content_display.innerHTML = "What type of content will your site display?"
div_6.appendChild(site_content_display)

var linebreak = document.createElement('br');
div_6.appendChild(linebreak)

var array = ["UTF-8","UTF-16","ISO-8859-1","WINDOWS-1252"];
var selectList = document.createElement("select");
selectList.id = "mySelect";
selectList.name = "ContentType";
div_6.appendChild(selectList);

for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

/**** */

let div_7 = document.createElement("div")
div.appendChild(div_7)
let language = document.createElement("label")
language.innerHTML = "What is your site primary language?"
div_7.appendChild(language)

var linebreak = document.createElement('br');
div_7.appendChild(linebreak)

var array = ["English","French","Spanish","Russian","Arabic","Japanes","Korean","Hindi","Portuguese","No Language Tag"];
var selectList = document.createElement("select");
selectList.id = "mySelect";
selectList.name = "language";
div_7.appendChild(selectList);

for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}

/**** */

let div_8 = document.createElement("div")
div.appendChild(div_8)
let optional_meta = document.createElement("h4")
optional_meta.innerHTML = "(Optional Meta Tag)"
div_8.appendChild(optional_meta)

/*** */

let div_9 = document.createElement("div")
div.appendChild(div_9)
// let check_input = document.createElement("input")
// check_input.setAttribute("type", "checkbox")
// check_input.setAttribute("name", "revisit")
var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('Search engines should revisit this page after '));
// div_9.appendChild(check_input)
div_9.appendChild(label)
let days_input = document.createElement("input")
days_input.setAttribute("type", "text")
days_input.setAttribute("name", "days")
div_9.appendChild(days_input)
var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode(' days.'));
div_9.appendChild(label)

/**** */

let div_10 = document.createElement("div")
div.appendChild(div_10)
var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('Author: '));
div_10.appendChild(label)
let author_input = document.createElement("input")
author_input.setAttribute("type", "text")
author_input.setAttribute("name", "author")
div_10.appendChild(author_input)

/*** */

var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "Generate Meta Tag");
submitelement.setAttribute("onclick", "toggle()")
submitelement.setAttribute("value", "Generate Meta Tag");
div.appendChild(submitelement);

var linebreak = document.createElement('br');
div.appendChild(linebreak)

var linebreak = document.createElement('br');
div.appendChild(linebreak)

let tag_div = document.createElement("div")
div.appendChild(tag_div)
let tag_generate = document.createElement("label")
tag_generate.innerHTML = "Your Generated Meta Tags"
tag_div.appendChild(tag_generate)

var linebreak = document.createElement('br');
tag_div.appendChild(linebreak)

let textarea = document.createElement("textarea")
textarea.setAttribute("readonly", "true")
textarea.setAttribute("id", "meta_tag")
textarea.setAttribute("style", "margin: 0px; width: 475px; height: 200px;")
tag_div.appendChild(textarea)

var linebreak = document.createElement('br');
tag_div.appendChild(linebreak)

var copyelement = document.createElement('input'); 
copyelement.setAttribute("type", "submit");
copyelement.setAttribute("name", "Copy to clipboard");
copyelement.setAttribute("onclick", "copyToClipboard()")
copyelement.setAttribute("value", "Copy to clipboard");
tag_div.appendChild(copyelement);




function toggle(){
    event.preventDefault()
    let input_fields = document.getElementsByTagName("input")
    let select_fields = document.getElementsByTagName("select")
    let final_string = ""
    for(let i=0;i<input_fields.length; i++){
        let get_input_value = input_fields[i]
        if(get_input_value.name === "site_title" || get_input_value.name === "site_description" || get_input_value.name === "site_keyword"){
            if(get_input_value.value !== ""){
                if(get_input_value.value !== "" && get_input_value.value !== "on" &&  get_input_value.value !== "Generate Meta Tag" && get_input_value.value !== "Copy to clipboard"){
                    get_input_value = `<meta name="${get_input_value.name}" content="${get_input_value.value}"></meta>`
                    console.log(`fields_${i}`, get_input_value)  
                    final_string = final_string + "\n" + get_input_value
                }
            }else{
                alert("site_title, site_description,site_keyword is mandatory")
                return false
            }
        }
    }
    for(let index=0;index<select_fields.length;index++){
        let get_select_value = select_fields[index]
        if(get_select_value.name === "robotsIndex" || get_select_value.name === "robotsLinks"){
            if(get_select_value.value === "Yes"){
                get_select_value = `<meta name="${get_select_value.name}" content="text/html; follow"></meta>`
            }else{
                get_select_value = `<meta name="${get_select_value.name}" content="text/html; nofollow"></meta>`
            }
             
        }else{
            if(get_select_value.name === "ContentType"){
                get_select_value = `<meta http-equiv="${get_select_value.name}" content="${get_select_value.value}"></meta>`
            }else{
                get_select_value = `<meta name="${get_select_value.name}" content="${get_select_value.value}"></meta>`
            }
            
        }
        
        console.log(`select_fields_${index}`, get_select_value)
        final_string = final_string + "\n" + get_select_value
    }  
    
    document.getElementById("meta_tag").value = final_string   
    
}

function copyToClipboard(){
    event.preventDefault()
    if(document.getElementById("meta_tag").value === ""){
        alert("Nothing to select")
    }else{
        var copyTextarea = document.getElementById("meta_tag")
        copyTextarea.select()
        try{
            var successful = document.execCommand('copy')
        }catch(err){
            alert("Oop's unable to copy")
        }
    }
}





document.body.appendChild(createform)
console.log(createform)
