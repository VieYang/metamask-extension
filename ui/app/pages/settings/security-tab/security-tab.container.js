import SecurityTab from './security-tab.component'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  displayWarning,
  revealSeedConfirmation,
  showModal,
  setParticipateInMetaMetrics,
} from '../../../store/actions'

const mapStateToProps = state => {
  const { appState: { warning }, metamask } = state
  const {
    participateInMetaMetrics,
  } = metamask

  return {
    warning,
    participateInMetaMetrics,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayWarning: warning => dispatch(displayWarning(warning)),
    revealSeedConfirmation: () => dispatch(revealSeedConfirmation()),
    showClearApprovalModal: () => dispatch(showModal({ name: 'CLEAR_PERMISSIONS' })),
    setParticipateInMetaMetrics: (val) => dispatch(setParticipateInMetaMetrics(val)),
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SecurityTab)
