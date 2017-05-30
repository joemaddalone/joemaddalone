node('master') {
	try {
		stage('build') {
			checkout scm

			sh "npm install"
		}

		stage('test'){
			sh "echo 'TESTING'"
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