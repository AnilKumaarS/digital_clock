//js for clock
{
    let date = new Date();
    let week = document.getElementById("week").getElementsByTagName("span")
    // let w = week.getElementsByTagName("span")
    // console.log(w);
    for (let i = 0; i < week.length; i++) {
        if (i === date.getDay()) {
            // console.log(i);
            let wk = week[i];
            // wk.style.color = "white"
            // wk.style.backgroundColor = "gray"
            wk.classList.add("wk-style")
        }
        // else {
        //     console.log("something wrong");
        // }
    }
    function greet() {
        let date = new Date();
        document.getElementById("second").innerHTML = date.getSeconds();
        document.getElementById("minute").innerHTML = date.getMinutes();
        // document.getElementById("hour").innerHTML = date.getHours();
        let i = date.getHours()
        if (i > 12) {
            i -= 12
            document.getElementById("hour").innerHTML = i
        }
        else {
            // console.log(i);
            document.getElementById("hour").innerHTML = i

        }
    }
    // greet();
    setInterval(greet, 1000);
}
//js for stop watch
{
    let seconds = 0
    let minutes = 0
    let timer = null
    function stopwatch() {
        seconds++
        if (seconds == 60) {
            minutes++
            seconds = 0;
        }
        const s = seconds < 10 ? "0" + seconds : seconds
        const m = minutes < 10 ? "0" + minutes : minutes
        document.getElementById("seconds").innerHTML = s
        document.getElementById("minutes").innerHTML = m
        // console.log(seconds);
    }

    document.getElementById("start").addEventListener("click", () => {
        if (timer == null) {
            timer = setInterval(stopwatch, 1000);
        }
    })
    document.getElementById("pause").addEventListener("click", () => {
        clearInterval(timer)
        timer = null
    })
    document.getElementById("reset").addEventListener("click", () => {
        clearInterval(timer)
        timer = null
        // console.log(timer);
        seconds = 0
        minutes = 0
        document.getElementById("seconds").innerHTML = seconds
        document.getElementById("minutes").innerHTML = minutes
    })
}
//js for step count
{
    let valu = 0;
    function setpCount() {
        document.getElementById("plus").addEventListener("click", () => {
            valu++
            if (valu < 0) {
                document.getElementById("value").innerHTML = valu
            }
            else if (valu < 10) {
                document.getElementById("value").innerHTML = "0" + valu
            }
            else {
                document.getElementById("value").innerHTML = valu
            }
        })
        document.getElementById("minus").addEventListener("click", () => {
            valu--
            if (valu < 0) {
                document.getElementById("value").innerHTML = valu
            }
            else if (valu < 10) {
                document.getElementById("value").innerHTML = "0" + valu
            }
            else {
                document.getElementById("value").innerHTML = valu
            }

        })
    }
    setpCount()
    document.getElementById("reset1").addEventListener("click", () => {
        valu = 0
        document.getElementById("value").innerHTML = "00"

    })
}
//js for set timmer
{
    let hours = 0
    let minutes = 0
    let seconds = 0
    let valu
    function set_timmer() {
        // document.getElementById("plus1").addEventListener("click", () => {
        //     hours++
        //     const m = hours > 23 ? hours = 0 : hours
        //     document.getElementById("set_hour").innerHTML = m
        // })
        document.getElementById("plus2").addEventListener("click", () => {
            minutes++
            const m = minutes > 59 ? minutes = 0 : minutes
            document.getElementById("set_minutes").innerHTML = m
        })
        document.getElementById("plus3").addEventListener("click", () => {
            seconds++
            const m = seconds > 59 ? seconds = 0 : seconds
            document.getElementById("set_seconds").innerHTML = m
        })
        // document.getElementById("minus1").addEventListener("click", () => {
        //     hours--
        //     const m = hours < 0 ? hours = 23 : hours
        //     document.getElementById("set_hour").innerHTML = m
        // })
        document.getElementById("minus2").addEventListener("click", () => {
            minutes--
            const m = minutes < 0 ? minutes = 59 : minutes
            document.getElementById("set_minutes").innerHTML = m
        })
        document.getElementById("minus3").addEventListener("click", () => {
            seconds--
            const m = seconds < 0 ? seconds = 59 : seconds
            document.getElementById("set_seconds").innerHTML = m
        })
        // console.log(seconds);
    }
    set_timmer()
    // console.log(s.innerText);
    document.getElementById("reset2").addEventListener("click", () => {
        let s = document.getElementById("set_seconds").innerText
        let m = document.getElementById("set_minutes").innerText
        // let h = document.getElementById("set_hour").innerText
        function stopwatch() {
            // s = s == 0 ? s = 59 : s
            // m = s == 0 ? m-- : m
            if (s == 0 && m > 0) {
                m--
                s = 60;

            }
            m == 0 && s == 0 ? s = "00" : s--
            m == 0 ? m = "00" : m
            if (m == 0 && s == 0) {
                clearInterval(stopid)
            }
            // console.log(s);

            document.getElementById("set_seconds").innerHTML = s
            document.getElementById("set_minutes").innerHTML = m
        }
        stopid = setInterval(stopwatch, 1000);
    })

}
//js for main
{
    let clock = document.getElementById("clock")
    let stop = document.getElementById("stop_watch")
    let step = document.getElementById("step_count")
    let set = document.getElementById("set_timmer")
    let clockid = document.getElementById("clock_id")
    let stopid = document.getElementById("stop_watch_id")
    let stepid = document.getElementById("step_count_id")
    let setid = document.getElementById("set_timmer_id")

    clock.addEventListener("click", () => {
        if (clockid.style.display != "block") {
            stopid.style.display = "none"
            clockid.style.display = "block"
            stepid.style.display = "none"
            setid.style.display = "none"
        }
    })
    stop.addEventListener("click", () => {
        if (stopid.style.display != "block") {
            stopid.style.display = "block"
            clockid.style.display = "none"
            stepid.style.display = "none"
            setid.style.display = "none"
        }
    })
    step.addEventListener("click", () => {
        if (stepid.style.display != "block") {
            stopid.style.display = "none"
            clockid.style.display = "none"
            stepid.style.display = "block"
            setid.style.display = "none"
        }
    })
    set.addEventListener("click", () => {
        if (setid.style.display != "block") {
            stopid.style.display = "none"
            clockid.style.display = "none"
            stepid.style.display = "none"
            setid.style.display = "block"
        }
    })
}