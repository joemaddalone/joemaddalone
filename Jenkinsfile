node('master') {
	try {
		stage('build') {
			checkout scm

			sh "npm install"
		}

		stage('deploy'){
			sh "echo 'DEPLOYING'"
		}

	}
	catch(err) {
		throw err
	}
	finally {}
}