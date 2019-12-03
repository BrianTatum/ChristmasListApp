import React from 'react';

const ScreenSize = (props) => {
  return (
    <div class="row">
		<div class="col">
			<h3>
				<span class='d-block d-sm-none'>Current Screen Size: XS</span>
				<span class='d-none d-sm-block d-md-none'>Current Screen Size: SM</span>
				<span class='d-none d-md-block d-lg-none'>Current Screen Size: MD</span>
				<span class='d-none d-lg-block d-xl-none'>Current Screen Size: LG</span>
				<span class='d-none d-xl-block'>Current Screen Size: XL</span>
			</h3>
		</div>
	</div>
  )
}

export {ScreenSize};