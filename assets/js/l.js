function login() {
    const dr92jvmef5 = document.getElementById("userSelect").value;
    const cf0esd8avi = document.getElementById("passwordInput").value;
    const message = document.getElementById("message");

    const a78hz4uvcw = {
        "mn34z6bd9kfvgq1i0uxylh7wtcpn3o8sdr92jvmef5b7kg1zx3": "1234567890",
        "rj4vfktqep9wyx6lmgah0u8bznc2ds713foiv5brkmty9qlxwz": "0987654321",
        "x9ql2zbkmt38wd7u5vgpo1n4chyasjre6fvmuxlk9d3tqe2whc": "2365256265",
        "wz3rk4mt1jpy7anlfv0xqdu5cgh89is2eo63bntvwxlkqzd5mu": "1938472134",
        "hq4z9wuv3cextkyjbn7padm62olgrf815iqsxvkwmb9t2cjh0n": "1092837825",
        "knz73rmftg8y9uwhapdlxvbc2qej0oi156sxztnymqov7gfwle": "8372619134",
        "gqx2p37mfwyjolvhe8bzukt04cdsniq5xrmk1avtln39gch7yu": "9283746097",
        "v7rzokhmuwl2gx9ynitj4eqfsac5pb8dmqcv3k01xln7hwryz3": "7123447563",
        "etylka4owcf0dxih6rpnvbqg5zjusm97t23vqlw8gyoxkmzh1r": "5633482903",
        "xgncw9eq5hsyl78vzkuopjb0dmtfai63n4r1yxqvkwzujgblhp": "3824689471",
        "u5pqgfw3vlk87djnmz0eayrhcx94stxo1ibqnzukmw62rvgtjp": "4824689102",
        "yxtjql8vp0shcmu93egkfzbwanodr745x6iy2mkntcwhvgz1uq": "2981673746",
        "lkqg8hrz9mw3pajbtvnocuf6xdi471syqe5lgx0t2vkwyhzrmp": "1482165639",
        "z0bdugmp1eq4nf3tvwlrayhoxikcsz769jy28kvrwbqgmlptdx": "9339847251",
        "hfukmzlqto3w98dxsvnycbapirgej701k4zvxu25wnlgqrhtmj": "3048009582",
        "vtm6pjkgywh39rqnuzxolbcf0esd8avi417xtylgwbmdqnpkfu": "8932049647",
        "xgncw9eq5hsyl78vzkuopjb0dmtfai63n4r1yxqvkwzujgblho": "1098172038",
        "bqv4myxpdunh7twc93loszekirjf8ag0mvk6q2lxgzpybntohw": "7438943820",
        "fkwg9bmrhzxupqto0dnjc7s3iel8avy62qwmk4lfvhxtyzogpb": "5793803016"
    };

    if (cf0esd8avi === a78hz4uvcw[dr92jvmef5]) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect password.";
        setTimeout(() => {
            message.textContent = "";
        }, 1000);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});
