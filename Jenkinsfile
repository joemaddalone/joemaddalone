pipeline {
	agent any
    stages {
		stage('build'){
			steps {
				checkout scm
				sh "npm install"
			}
			
		}
		stage('test'){
			steps {
				echo "TESTING"
			}
		}
		stage('deploy'){
			steps {
				echo "DEPOLYING"
			}
		}
    }
}