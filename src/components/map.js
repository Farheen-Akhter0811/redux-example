import React from "react"
import { useParams, useLocation, useRouteMatch } from "react-router-dom"
import Posts from "./Posts"
import PostForm from "./PostForm"

const Map = () => {
  const { name } = useParams()
  const { pathname } = useLocation()
  const match = useRouteMatch({
    path: `/dashboard/${name}`,
    strict: true,
    sensitive: true,
  })
  return (
    <div>
      {name == "feenu" && match ? (
        <div>
          <h2>The paramter from url is {name} using useParams() Hook</h2>
          <h2>
            The current URL is {pathname} from location object using
            useLocation()
          </h2>
          <PostForm />
          <Posts />
        </div>
      ) : (
        "parameter not correct and doesnot match the url given"
      )}
    </div>
  )
}

export default Map
