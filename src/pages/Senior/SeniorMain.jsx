import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Nav from "components/Common/nav";
import icBell from "assets/ic_home_bell.png";
import logo from "assets/logo.png";
import seniorill from "assets/seniorill.png";
import ReservationCard from "components/Common/resevationCard";
import WhiteCard from "components/Common/WhiteCard";
import PurpleCard from "components/Common/purpleCard";

const SeniorMain = () => {
  const scrollRef = useRef(null);
  const [reservationData, setReservationData] = useState({
    userInfo: [
      {
        Name: "백이진",
        StarNo: 3,
        Job: 2,
        TimeStamp: "202208201500",
        Comment: "디자이너도 코딩을 배워야 하는지 궁금해요.",
      },
      {
        Name: "김민지",
        StarNo: 5,
        Job: 2,
        TimeStamp: "202208211800",
        Comment: "좋은 UX 디자이너가 되고 싶어요",
      },
    ],
  });
  const [seniorData, setSeniorData] = useState({
    seniorInfo: [
      {
        UserNo: 10294,
        ImgSrc:
          "https://images.unsplash.com/photo-1660909857348-96aef191d462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        Company: [3],
        Job: 2,
        Period: 14,
        ConnectCnt: 1,
        WorkTag: [1, 2],
        CharacterTag: [3],
      },
      {
        UserNo: 10904,
        ImgSrc:
          "https://images.unsplash.com/photo-1660963597514-d32f381cc688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
        Company: [4],
        Job: 3,
        Period: 5,
        ConnectCnt: 6,
        WorkTag: [1, 2, 4],
        CharacterTag: [1, 3],
      },
      {
        UserNo: 10039,
        ImgSrc:
          "https://images.unsplash.com/photo-1660943554191-ebbc3bb923d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        Company: [2, 3],
        Job: 1,
        Period: 8,
        ConnectCnt: 10,
        WorkTag: [4],
        CharacterTag: [3],
      },
    ],
  });
  const [juniorNeeds, setJuniorNeeds] = useState({
    needsInfo: [
      {
        ImgSrc:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYZGBgaGBocGRoYGBgYHBgcGBgaHBwZHBocIS4lHB4rIRoZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJSQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xAA+EAABAgQEAwYEBAYBAwUAAAABAAIDBBEhBRIxQVFhcQYigZGx8DKhwdETQuHxBxRSYnKSgiND0hUzNFNj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAJhEAAgIBBAEFAAMBAAAAAAAAAAECETEDEiFBURMiMmGhQnGRBP/aAAwDAQACEQMRAD8A9PY0H9/0SmGuA5dCIkM5KEFCABCEIAEiVIgASFIhACFcFdlclZAbcmHlSHhMPahjREebjqpUx8CixBcdVNisBbQmlURwwZSucosw6x6FW5w4H8yai4SSDQqexmrRz2CHcd/m71SfxDlnvhsawVOetPAqX2Sk3Qmua8UOYnwJXfa1gIYS2I4tdUZBUg0OvJWbajwTpNmVZNxmMyNgHNSl9FncUl4zzmezKabkivmtbFn4h0hxrf2BQ8SgxI7aPgRjTTutFD5rm01KMr2lJOLWTMYZgsWIBkyuNzTNfyohaXCZD8ENd/KRg8AirSN/+SFuc9W/avwyowrJ6EhIlVhAhCEAIlSIQAIQhAHKEIQAFcFdFclZGcuTbwnHJt6GMhRPiCsIrAWKvf8AEFZP+BEexMgpQ48UpSLBon4a4k3Ts/MFlKAHqmsM1SYtsq37TFcjBxB3ALk4i/l5KKVyVPdLya2oknEX8vJCiFCW6XkNqLxC5XSqZBCEIAEIQgAXKEIAEIQgYhXJSlclZA5cU28rt5VJiuPwYNQTnePytpbqdB68kMZKee8FZvd3V5nPdrIjj3A1nCgzHxLrfJRndp5ulQ8kcCG3+ScVSYnyek5lwSsLI9rormjMxrjyq3aum6spftY0/Gwt5tOYeVAsbWO0bnCikxg6Jjs9NsiNzMcHDltyI2XWPPplW38TPZXly5LlHdGXBmApFCQXIUN0yAlQBqV0uUKxM6QuUIAEIQgAQhCABCEIGclcOK7K87/iB2noTKwXX/7rgeP5AfXySYJWL2l7W53GDLuo0WfEBu7iGHYc91lzGaBr9Sqdj7WKlQoVal2wr1OwQuDVWOB4Jr6evU+nVdMiVPL6JyUki4E8SG+LiKnyqnosrRjnAavyjo0I3D2DBjNbSlrDzBTbo9d9q/dV8w01980jgQa8z91rcZ2l1hWMxZaIIkJ1DuPyvbW7XDcc9l6a/tG2YhMiwWBxNnscaFjqaFeNQ634i4+3lRXuBYi6XiNeLsdZza2NPqFiTai9uQpN8m6fiUb/AOpv+36KpxLFIzRXIwEcz9lYDGHxRmZBsNySsdj85nc7M3KdKBR05TlKmkakopWjQNxCIQLsuKoWbwSTbENHPyUFuaFuSadX+CStY/T2lCRKtmAQhCBghCEACEIWgBCEhKyBQdsMc/lYBc2n4j+7DHM6upwAv5Lwx8cveSSSTUkm9SdSeJ181ou3ePGYmHUPcZVrOgsT4n6LP4BKGNHawaG7jwa2lT9EfZpLo7gRBuaXr8xRX0sK5AL5jfo1XUqZFh/DIZUmmZwtWulVf4Zg8Jrw7KNKU2usOReOnRn5KHRjD/fr/sPsmozv+i4btiO8nCy3wwKHkLQ2gJr0vVZrGcAfVxYK5hQg78D1+6L8j28cGLjMB8vWv3UZ9D1qD8gFOjSz4fciMc06XHAg1HHZMPa3PQ7CvkT91tMjJDLG6eP/AJKVAHdp4/T7Jhlh6dMv7p+G6lvfBaMms7P4yxkJzIhpQ908jtX3qsti8QPe5zdCV1DNRTw+yjTIslp6ajJyXZmcm1Q7AY2gq6lkJlgrTolVa+zFnvCVIhRNioQhAAhCEACEIQAKn7VTpgysV4schDeru6PVXCyX8TH5ZB5/ub6oYLJ4fMPzVPOg8PY8l6J/D/s8TLOiuBDovw0sQwWFDzufELz6DLl74cMavc1vi8gfVfQOHwWsY1jRRrWhoHICgSeKLacbdmSh9lmfjQ3uAyQ9WZa5rk6n30WhlJejg1rS1uZ2VpNaNr3RVWjyAKlScMgVOc+Czy+CjqPJJisys50XneN9pXsjNhsZmqaV00Jr6HyXpkZlQqCLgkMva8saXNNWkgWPEJtWZhLh+SNKwWRS6BMQwHC5ab2Ojmu3FtQsJ257OOlaRGEuYagHdppofD0Xqb5bM9j3fEz4TaoB1FhoaKF2zl2vk4oIrRhcOoQuMBL3UmeISD87Be/eFeN/1TpfSnX36qJLHI07AF1eSkPYSwO5X8SPoqEiYH0cfApcQcdxwp0TLGk++hT0RjnNaRcC3kURdMzJcEnBaZ70+HdIrPDJRv8A3GgWtQ/ZCjPUV9jjF0esISJVQyKhIlQAIQhAAhCRAAqHtrJCNJRmcG5h/wAb/RXyjzrMzHN4tI+SGCPn/suQ6el66fiV8QCR6Be3y0Sq8Hw134E3DcdGRmg9M+V3yJXtkN1ASFifBfR7JGIRyxtQK0GnPZSMMxtgh53nK0UrUHunetOCoYPaCA45Huo6tCCKEU11Wlw8wnDKC0g0oOKyrs6JQ9ttFk+NpQ1BFQRwXJNUpgAAAClNEjQqckFXQrSqztS8CVjV/oI87K0IWT7ezWWXLBq4ivRJjXk8gI1adHAV60ou5aPWAWmtQ0jxapMOEHlzOZAPOlR81Twn0JB4m3UX+dVokaKUc0sYeIB8x+i03YnDoMYPbG/LlIFaa1r6Lz+Rm6Bo/wAR4afVbnsq/vvO1Pr+6LoGrRt24PJt2B8aoVY6KEI3fRjaa1KuUqBCoSJUACVIhAAhCRAAuXiyVISgD507VSboUzFabERHEdHGrT5ei9U7Kz/8xLsfW5aA7/JtnfMFYP8AiDMtjTMRzRTLRgp+YMsSfH6J7+HeJOhufDce64gt5OpfzAHlzWZK4ldN1L+z0GawhrzWg52F1NkMEb/Tl5tLmkf6lSZKKHAFW8uRssRVnZ684x2pkeHLxmZaxA9g2c3vf7A3Hh4qwaF0Ta6be8DdbwczbbB9gvMu3OLwg/K99KaNFy49BstP2p7RiXgveBWgPSuy8CmJx0WK6JENXONTXbp4JRW5ilLavtmjlptpeKaOrfqWj0VFOv8A+q8jc1HWh+6WViXr7uf0KbjiriedfP8AdU+jGeQln94cqfRbzs/MZGZuNlgZZvep1PiTQL1vs3hDPwGF47xFT43U5yUUajFyIT8RQtIMMhD8oQpeqjfpPyapCRKug5hUJEqABCEIAEJCU0+YaENpDSbwOpuI8AEu0UGNP7BVs1NF1AT1U3qLopHSfZkseweF/MRI7RVmU0aQKBxFKjl91BwDBwxgefiec/QH4R5UPitFiYqw9FInJXI8tGgDQOmRqzubTKxik0R5Waew2NlpJGdeQLLNtZQrT4UKgJIo8Fg2M87UXD4RPxGqmMYlyre0nuo8t/iVNAMEMCtdue1fmvN5h4e2hbkeNxoRz4L2Htb2f/mYpykDIKGoJq43OnCw81l4HYBznViPAaD8LRc+aIyUeBSi5cmEhtyhNF258fsvSMW7FNMN/wCDUPYCRvmoKlp8NPBedulnUo5pYAbggg+Wv7rUZJ8k5Ra4JWAy+d4tbMPG9gvZsNsxee9kMNcXNflo1tT/AKgkfOi9Aww9zxKhrSt0W0lSJhKFwShRLGhQhC7zzhUJF1RAHD3gaqJEm/BRZmaBPooESPVSlN9F4aa7LB81XdRIkxVR2OBHNMTHd3U2yyikduf3ul03nrfimocSrXGu9EFwpRIYkaHmDh/afRXM3AzshRR+dja9QAfQ/JVUuKmnI8FosEh/iSuT8zCQ3qwmnmPVUgrtGJva0yhfAurrCxRRojKgFSIEUMF0kba4Lh0QAXTYmqMdEpYWbX8zvsPoq2UhvmX0uIbfjI3/ALRz9E/icZrniG0d1lgBpX9Fu6Vkmldf6MwWWuanUnmbldvZZdNPvYLiI+ygVGWO7rzbR3yBUCLhsGK2kWGx9q94CxHA7KQ99Ibid6DzICIZt4VFeeydhQ3/AOmNDCIY2IpYe9AmMMgPDMpaQQTUEUVjAiDzVhDfv5oUU8mW2lwVP8s/ghXrAN0K6/54NZIPXmujp0Rg1p4lMRcTgs+J7B1cPuvmiJiUZ3xRYjur3n6qO411v1urED6Pjdr5JnxTEIf8gosPttKxnGFBi53lpplaaWGpNKL53W2/hzL0MWMRplY3qbn6LMnUTcFckj0KNFOUEG2ai4fEtVNPqYb+V/IogvGXX5rkO0cgRLp2dPcKhh9HaqdGBLDTZAyFLVyDmSfMrp1eSclntc1tNhQjgRsVzEF0CHZEXodVo8B7j3jYur5gLMyjqOBWnwwd/qK+S3pP3GNVe0fxeRIrEaLG7hwPEclWymGvinvVYzidT0H1Wjigkeg4LqWdbmNfuuhwTdkFqyUaI8y9kvCysFABQdfus9JAkZjqblSe0Uxmc2HtvdcSrQG05DT5aqGrK3XgppKlb7H609fHmo0y+xvtzXcR/go0ciylZZIYm3UYxt6E16U/U/JNB9WgVPyKSff3gODR87/VNQ72HogZYy4NaV6j6qzh1p70UOVh5eXv0+6ktd75poyyW1/H57pEy59Bw+iE9xjafMKWq5JQF1nIKSvUuyUl+HKMr8TyXno7T5ALzCXZmexv9TmjzIC9sfDDQGjQNAHgFLVfFFtFW2zuU7zHt4g+iYlYlqJ2RNHKDKxKudwzEfNQOklzBurGSoRQqtmDaqk4XEqgCtxWWex+eG4tdv8A0u6jddSU1Eewl7Q29AQfi4kclZYizOcvHXkBqU29gaA1osEWA2x9DVa/CH1bXp6/ssWBcLU4LF7nl6rUHUkY1FcWaWIdCo02ctHNOg8CNwVJii3iqTHJnKzLu6w+q65OlZyRVuikfEMR5fztyAU+G+1fr79+agwmUFVIY73799Fwt27O6qVEh970p1+aixSLd6gBrquY7nFtWmgre1/noq+YY03JLjzNaHpoEDOZmJmeSK62PIUAUyRg6ac7qBDh1O3L0V/IQAADby2QDHHCn6bj62Q3f3Ue/VNzDqcufDw2UeLGytJO3yJ+/wBExCzcyahrdTfwHFCZw2CX1LqVN77cteqEgPnlKFyhdx55c9lpExplg2ac7jwDDX1oF6m+MCsV2FlaQ4kXdzg0dBc/P0WhEYtK59V2zq0VSvyWBi5T56qDh8Tvvaf6q/7frVdxX5m1Cgy0Wkb/ACaR4i4+qkVZeR4oouZCOA6lVFmIiaY8VqgZo4Tqvfxt5U2SOZwSYVIPiua9tmizia3HLifutLM4C0t7hId/cag/ZNQk1aE5JOmY+MyhVvgD61b7sqqcYWOLHghw1B93CdwqbDHjySwNq0ehOfZZPFI2eKeDbDrv9vBXkxMOMMuYC45agDoszA4nU6/WvBW1pcJIhox5bZJB30+i5c/ztTrWl/l7sCtre7Llx9/X3+/OdBNdJuY3vEUcBWnOg9VQxwcxadQaKxe+gBe7uimvK4A8/n0Cis773ONLnkackIEOyMG+1tVdsbRvpZQpNgqPI6dFImouVuqYnyVs9FvQ/fb5hQhE/Ec1g0BBO53t9VGxCduabKdgkKgzGxNSeqBlxLMoKV0Qmmxa1A1CVFmaPmxCUKXhkAPjMa7QuFempXccKPVcAwbLLQm6HLmd1dcqQ+SaNSuZaezDI00oKDoos1DiV1XG3ydsVSOZrI0GhVBMzeVzXcHCvorqWwN8Z1C6g3cfoN1ewuz0rDILml7ga1ca3Gnd0TBkKVwh8RuY9xuuZ2tONFbYdgbLl7CWjQvNC88Qxp7ret+ilxIxcyrdK0HNxNB4AZj1AVtKws1B7pyWox7MuRPkIZYAA0BvAbDaikzDyBmArTbem6Qvyi5FOa5zV0KtXRPuyqxmTZMMrWjwLOHoeIVPI4dChNzPIc7Xeg+/VWuKksDnttxGx58iquSgUIIrEeDW92t5UGvioy+ReKW3JpsLNRcUGyi4thJcc8OgcfibpmPGuxVxLuq0GlDTQ7LtwVdqcaZBzalZhmvuRvcEbilqEJXvDRe5OgFvE8vd7q1ZKNL4jiPicaHfmfOqrZjDHMqW98b1u7x4rlcaOlSTI13HM412/wAffHUqZCZxrx4dU3DFutj6UT7Nut7pAS5cWr9d1DxSLqOCsIAVJjDrdT7+ibEsmfmLvAO5r5cfkr2HFIYADt9vuqCcigRg2ujPUi6spck06fSyDTLzDBU3OyVMQTluEIszR8/th0Ck4NDc6PDDRU5tvmuGMc94Y25cQB4rdYRAbL9yAwPikd952PAcByXXKVI44xtlgzDHtu2oVpKPcR39tT9FxAlIzjnjPaGgfC2tSeZSz8UZQGig8lzM6kTIc7lBIsNhyUV8ckkk68UwHUa0cv1XDtkwLJk0WsbTQPFfFpp6FW0lPOzVJqqCA0ODmG2YWvTvC4v1FPFQcPjRIkQsDixjfi2Nvy1Woq0ZbSyehw8YhmxcOF9Ol087LQmGQ00sK90nhTbwXnfamcayWiU0DMjebn90eVSfBUfZLtFHgNo5xfDp8LjUt/xJ25FbfBmLtm+no0SZ7jWkAOGfvBpFL5a/bYq8wqC4HQNA2FCD5Lz+D2naHvcQ6jnV08K9LDyWr7OY6x7u48Hi06hZjnkpN2qRsaqJPTVO6D3j8uJTr5huXNWlAqP+YzOLzvYdNvOqpOVIhCNslCwokTbYnNdMv4rmLDUeVD+R96qBFhOY4A7g39ehVyRQKJPxmthlztBqeHNDRpM6hvFFne0ES3MOVrhs0HtFLrPdpohDyD1olkeGUTH55un/AOdR/sCrtjnMI10ssfNzTocxCiNvYtO1RY++i3GGzcKYZXNcczw3CclQReSXBmAR150QuTh7hbbY/NKsjPHezUIvmWACupPIAXK9Gl2tYA1goSbn9V5x2amcsw3bMHN8x+i38B9m+PyXRqZObSwTnRyXHhRR5w2SS7xnvw+a6mDYqJY6J9+iQt+ei6YyoqpEOGHNotCG4bSfVWMq2HUuewZzc1rlceJA3UZsOn6KFiGIfhkMAJcRW9gAdChNp8A15Osbw+FEGaK9tBXK3RjKj8jAACebsxvqs1+EwDKytOLqVPloE9Mue92Zxr6DoE4yCLJtt5EklghmEq6bnYsKroRc1w0c2xH36LQmCokaWoQaVvWnEIT5G1aNN2VxqZmYZbGoGtsXttnIFSKcBvT5LRB+nv375rL4ZiLMgYwZQPy0pTmruBMg3rb39/VZk22OKpFs13jx4j37sn4MS9Pfv3oq1sT5/Ll76JyFHuD78vfBIdFjNvoBRRsQvCpqDTxXUdwcPfvyXTLdBe6BEeQlWwWVOqou1uHRYpZEhMzdzvXaCKHmefyVvNTOY028v2+mqsJajmX919+6oTG0eLzzXw3tMVjm0caZhYjQ5TofBaKWwo92JCcWkgHXjtRbGJLD8T8NzQ9jtWvAcPI2KYxyRhsY50NuX8MAuDASQ3i1o4cEN2CVD2ETbi2kT4vshUUlLvfDD2vflJtVrfMgXQkM8ahvLSHDUEEdQvS8InWxYTXjWtxwO4XmStsBxgy7zUVY74h9RzXZOO5HFCW1non5wU/MXChwI7Yga9pq03BUxra7Lmo6UyRKM7qkBvDyTQe1jSXFrQNyaKxZLEMEQkZTSnME68kbW8A5JZHcNks5zO+Eacz9lnO0sGj2HehYf+Dqj5FbaSdaizHbGHR7Tsb/AEP0VNqUSW5ykUgh2qgMonJdwsu3hTLCQ2VCbfBUhlvJMYlOMhMzu05anhRA+iDFhUNRYjdS5bFcjmtfvodj14Krw/HWRnFhGR21aX8t1Knpa7DqL+6oaa4Yk01aNVAnARb13+qf/mNxT3x97rHwYz2Uy6bg6forOUxAO5O4HfpxSo0maqWjVU+MCGWuVRYVGzO5fVX8zdvu6QFDMxKGx6j3xVngsxXu+/397KnnmEHimpKZLX1+qENmmfDrFB4aW81An4hZGzGlHWNeF7aq1gRQ+ht1PFVuOQrZhrUX+yKEiwkpdrQctS3YU05ITWGxatGp6U4IQI+akIQu04S1wHEYrIga15AJuLEfNaPFMZjsHdfTo1vDohClLJSODHzeIRYt4j3O6m3lovenf/BZ/hD+iELbwY7J2H7dFU9tB3GH+76JELH8TUfkZmWUpCFE6UDdlW9oWAwdPyk+NNUITj8kEvizGYT/AO8z/IeoXosxcM8fRCFvWyiejhkZ7BTRQY+p97oQplS+wSIasNfdls2/ADyQhZGU+JfDXe9/NU8P4vAeqRCEM0mEvOXX8oUrF7sQhHQdkHB9SOZSIQkB/9k=",
        Title: "사수 꿀팁 알려주세요.",
        Comment:
          "원하던 회사에 드디어 취업했어요! 취업 후에 사수님께 잘 보일 꿀팁 있나요?",
      },
      {
        ImgSrc:
          "https://images.unsplash.com/photo-1660906864977-71d53fa439d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        Title: "아이디어가 부족해요.",
        Comment:
          "독창적인 아이디어를 생각해내는 게 늘 어려워요. 이럴 땐 어떻게 하나요?",
      },
      {
        ImgSrc:
          "https://images.unsplash.com/photo-1660966822626-01b9772bf448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        Title: "개발 언어가 어려워요.",
        Comment:
          "개발 언어를 공부한지 3개월이 넘었는데 아직도 어렵게 느껴져요.",
      },
      {
        ImgSrc:
          "https://images.unsplash.com/photo-1660974787487-0c778c3ac77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        Title: "아이디어가 부족해요.",
        Comment:
          "독창적인 아이디어를 생각해내는 게 늘 어려워요. 이럴 땐 어떻게 하나요?",
      },
    ],
  });

  useEffect(() => {
    console.log("reservationData", reservationData);
  }, []);

  return (
    <StSeniorMain>
      <Nav />
      <StLogo>
        <img src={logo} alt="로고" />
      </StLogo>
      <StIll>
        <img src={seniorill} alt="" />
      </StIll>
      <StLogoHeader>
        <img src={icBell} alt="알림" />
      </StLogoHeader>
      <StTitleHeader>
        <StPurpleBox>
          <StTitleText>
            퇴직 후 나의 소중한 경험을 <br />
            주니어에게 공유하자!
          </StTitleText>
        </StPurpleBox>
      </StTitleHeader>
      <StReservationContainer>
        <StLabel>예정 미팅</StLabel>
        <div>
          {reservationData.userInfo.map(
            ({ Name, StarNo, Job, TimeStamp, Comment }) => (
              <ReservationCard
                name={Name}
                starNo={StarNo}
                job={Job}
                timeStampRaw={TimeStamp}
                comment={Comment}
              />
            )
          )}
        </div>
      </StReservationContainer>
      <StSimilarSeniorContainer>
        <StLabel>나와 비슷한 직군의 시니어</StLabel>
        <div>
          {seniorData.seniorInfo.map(
            ({
              UserNo,
              ImgSrc,
              Company,
              Job,
              Period,
              ConnectCnt,
              WorkTag,
              CharacterTag,
            }) => (
              <WhiteCard
                id={UserNo}
                imgSrc={ImgSrc}
                companyArr={Company}
                jobRaw={Job}
                working={Period}
                meetingCnt={ConnectCnt}
                workTagArr={WorkTag}
                characterTagArr={CharacterTag}
              />
            )
          )}
        </div>
      </StSimilarSeniorContainer>
      <StLabel>직무 관련 주니어 니즈</StLabel>
      <StJuniorNeedsContainer>
        <div ref={scrollRef}>
          {juniorNeeds.needsInfo.map(({ ImgSrc, Title, Comment }) => (
            <PurpleCard imgsrc={ImgSrc} title={Title} comment={Comment} />
          ))}
        </div>
      </StJuniorNeedsContainer>
    </StSeniorMain>
  );
};
export default SeniorMain;
const StLogo = styled.div`
  position: absolute;
  margin-left: 30px;

  & > img {
    width: 179.82px;
    height: 48px;
  }
`;
const StIll = styled.div`
  position: absolute;
  margin: 47.57px 0 0 154px;

  & > img {
    width: 217.19px;
    height: 178px;
  }
`;
const StSeniorMain = styled.div`
  width: 375px;
  overflow-x: scroll;
`;
const StLogoHeader = styled.div`
  width: 375px;
  height: 37px;

  & > img {
    width: 19px;
    height: 19px;
    float: right;
    margin: 14px 18px 0 0;
  }

  background: rgba(102, 97, 230, 0.15);
`;
const StTitleHeader = styled.div`
  height: 145px;
  width: 375px;
`;
const StPurpleBox = styled.div`
  height: 123px;
  width: 375px;
  background: rgba(102, 97, 230, 0.15);
`;
const StTitleText = styled.h1`
  padding: 56px 0 0 30px;
  margin: 0px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;
`;
const StReservationContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  margin-bottom: 30px;
`;
const StSimilarSeniorContainer = styled.section`
  & > div {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
  margin-bottom: 30px;
`;
const StJuniorNeedsContainer = styled.section`
  overflow-x: scroll;
  margin-bottom: 100px;

  & > div {
    display: inline-flex;
    overflow-x: scroll;
    gap: 12px;
    margin: 0 30px 0 30px;
  }
`;
const StLabel = styled.h2`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;

  color: #202e5f;

  margin-left: 30px;
`;
