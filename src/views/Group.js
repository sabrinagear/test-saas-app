import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import GetTasks from '../components/Tasks/GetTasks'
import SCHEDULE from '../assets/group-page/png/SCHEDULE.png'
import SCHEDULE1 from '../assets/group-page/png/SCHEDULE-1.png'
import SCHEDULE2 from '../assets/group-page/png/SCHEDULE-2.png'
import DAILYPIC from '../assets/group-page/png/Component 31 – 2.png'
import HOUSEPIC from '../assets/group-page/png/Component 25 – 7.png'
import INVITEPIC from '../assets/group-page/png/GET STARTED.png'
import IMAGE1 from '../assets/group-page/png/IMAGE.png'
import IMAGE2 from '../assets/group-page/png/IMAGE-1.png'
import IMAGE3 from '../assets/group-page/png/IMAGE-2.png'
import IMAGE4 from '../assets/group-page/png/IMAGE-3.png'

const Group = ({ match }) => {
  return (
    <>
    <div className="topHeaderAndButtons">
      <h1>
        <img src={DAILYPIC} alt="text saying daily chores" className="groupHeader"></img>
      </h1>
        <div className="imageButtons">

            <Link to={`/groups/${match.params.groupName}/add-task`}>
              <img className="groupTopButtons" src={SCHEDULE} alt="a pink button saying new task which is where you would make a task.">              
              </img>
            </Link>

            <Link to={`/dashboard`}>
              <img className="groupTopButtons" src={SCHEDULE1} alt="a pink button saying dashboard which will send you to that page.">
              </img>
            </Link>

          <Link>
            <img className="groupTopButtons" src={SCHEDULE2} alt="a pink button saying my chores which will send you to your chores.">
            </img>
          </Link>
        </div>
      </div>

    <div className="bottomTableAndUsers">
      <div className="bottomLeftView">
        <GetTasks groupRoute={match.params.groupName} />
      </div>
      <div className="rightBottomView">

        <div className="houseText">
          <img src={HOUSEPIC} alt="Text saying House Members"></img>
        </div>

          <div className="membersCardsView">
            <div>
              <div className="invitedMembers"><img src={IMAGE1} alt="a users profile">
              </img></div>
              <div className="invitedMembers"><img src={IMAGE2} alt="a users profile">
              </img></div>
            </div>
            <div>
              <div className="invitedMembers"><img src={IMAGE3} alt="a users profile">
              </img></div>
              <div className="invitedMembers"><img src={IMAGE4} alt="a users profile">
              </img></div>
            </div>
          </div>

        <div className="buttomInviteButton">
          <span>
            <img src={INVITEPIC} alt="a pink button saying Invite Member"></img>
          </span>
        </div>

      </div>

    </div>
    </>
  )
}

export default withRouter(Group)
