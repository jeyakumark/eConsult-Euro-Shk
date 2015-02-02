FileReader.prototype.readAsTextFromBundle = function(_file, _ext)
{
    if(this.fileName && this.fileName.length > 0)
    {
        navigator.fileMgr.removeFileReader(this.fileName,this);
    }
    this.fileName = _file;
    navigator.fileMgr.addFileReader(this.fileName,this);
    alert("Calling File.read : " + this.fileName);
    //window.location = "gap://File.readFile/"+ file;
    PhoneGap.exec("File.readFile",_file, _ext);
}

var readDataFromBundle = function (fileName, ext)
{
    var fr = new FileReader();
    fr.onload = function (data)
    {
        if(data !== "(null)")
        {
            alert(data);
        }
        else
        {
            alert("File doesn't exist, or it's empty!");
        }
    };

    fr.readAsTextFromBundle(fileName, ext);
}


/* When this function is called, PhoneGap has been initialized and is ready to roll
function onDeviceReady()
{
    // do your thing!
    readDataFromBundle("newfile","txt");

}
*/

