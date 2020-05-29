<?php

echo '
					</ul>
				</div>
';

if ( $readURL == '/index.php' OR $readURL == '/') {
	include 'include/social_icons.php';
} else {
	include 'include/back.php';
}
;

echo '
			</div>
		</div>
';

?>