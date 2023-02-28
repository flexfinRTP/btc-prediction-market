import { LastVote } from '../../components/LastVote'
import { useColorVote } from '../../stores/useColorVote'
import { Button } from '@chakra-ui/react';

export const Vote = () => {
  const {
    colors,
    vote,
    isValid,
    alreadyVoted,
    updateVote,
    sendVote,
    unvote,
    resetVote,
  } = useColorVote()

  const handleSubmit = (e) => {
    e.preventDefault()
    sendVote()
  }
  const handleUnvote = (e) => {
    e.preventDefault()
    unvote()
  }

  return (
    <>
      <div>Vote</div>
      <div className="h-60 sm:h-72 flex items-center justify-center">
        {colors ? (
          <form onSubmit={handleSubmit} onReset={resetVote} className="w-full">
            <div className="mt-6 flex justify-center gap-4">

              <Button type="submit" disabled={!isValid}>
                {alreadyVoted ? 'Revote' : 'Vote'}
              </Button>

              <Button type="reset">Empty form</Button>
              {alreadyVoted ? (
                <Button type="button" onClick={handleUnvote}>
                  Cancel vote
                </Button>
              ) : null}
            </div>
          </form>
        ) : (
          <p className="text-center text-slate-600">Loading</p>
        )}
      </div>

      <LastVote />
    </>
  )
}
