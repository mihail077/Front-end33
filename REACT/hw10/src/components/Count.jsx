import {connect} from 'react-redux'

 function Count ({count}) {

    return(
      <div>
        {count}
      </div>
    )
}

const mapStateToProps = ({count}) => ({
  count
})

export default connect(mapStateToProps,)(Count)