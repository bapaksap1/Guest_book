import React from 'react'
import styled from 'styled-components'

const TemplatePDF = () => {
  return (
    <html>
      <table>
        <tr>
          <td>
            nama: Nopal
          </td>
        </tr>
      </table>

    </html>
  )
}

export default TemplatePDF

const Wrapper = styled.div`
  width: 595.28;
  height: 841.89;
  margin: 4, 4, 4, 5;
  background-color: red;
`

const Header = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`
