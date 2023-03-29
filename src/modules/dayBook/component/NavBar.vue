<template>
    <nav class="navbar">
        <div>
            <i class="fas fa-bug fa-2x icon1"></i>
            <a href=""><h3>Apiarios Moy</h3></a>
        </div>
        
        <div class="logOut">
            <button><i class="fa fa-sign-out-alt fa-2x"></i></button>
        </div>

    </nav>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: #1d6042;
    display: flex;
    justify-content: space-between;
    
}



a{
    color: white;
    display: inline-block;
}


button {
    width: 50px;
    height: 40px;
    margin-top: 5px;
    margin-right: 10px;
    background: #57e23598 ;
}
button:hover {
    background: #26681698 ;
}

div a{
padding-left: 10px;
}
div i {
    color: white;
    padding: 5px;
}
.icon1 {
    color: #57e235;
}

</style>